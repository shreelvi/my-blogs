import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aspnet-uiajax',
  templateUrl: './aspnet-uiajax.component.html',
  styleUrls: ['./aspnet-uiajax.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AspNetUIAjaxComponent implements OnInit {

  pageId = "/angular-uiajax-blog"

  snippet1 = `

    public class Product: BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
    }

    public class ProductType: BaseEntity
    {
        public string Name { get; set; }
    }

    public class ProductBrand: BaseEntity
    {
        public string Name { get; set; }
    }

    public class BaseEntity
    {
        public int Id { get; set; }
    }
  `

  snippet2=`
    public class StoreContext : DbContext
    {
        public StoreContext()
        {
        }

        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlite(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

           
        }
    }
`
snippet3 = `
  builder.Services.AddDbContext<StoreContext>(x => x.UseSqlite(connectionString));
`

snippet4 = `
  dotnet ef --verbose migrations add InitialCreate -o Data/Migrations
`

snippet5 = `
  public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText(path + @"/Data/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach (var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText(path + @"/Data/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText(path + @"/Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

  
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
`

snippet6 = `
----PRODUCTS----
{
  "Name": "Angular Speedster Board 2000",
  "Description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
  "Price": 200,
  "PictureUrl": "images/products/sb-ang1.png",
  "ProductTypeId": 1,
  "ProductBrandId": 1
},
{
  "Name": "Green Angular Board 3000",
  "Description": "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
  "Price": 150,
  "PictureUrl": "images/products/sb-ang2.png",
  "ProductTypeId": 1,
  "ProductBrandId": 1
},
.....
]

----BRANDS----
{
  "Id": 1,
  "Name": "Angular"
},
{
  "Id": 2,
  "Name": "NetCore"
},
.....
]

-----TYPES----
[
  {
    "Id": 1,
    "Name": "Boards"
  },
  {
    "Id": 2,
    "Name": "Hats"
  },
  ....
]
`

  constructor(private title: Title) {
    this.title.setTitle('Blogs | Angular Attribute Directives Article')
    this.loadScripts();
  }

  ngOnInit(): void {
  }

  loadScripts() {
    const dynamicScripts = [
     'https://platform.twitter.com/widgets.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
