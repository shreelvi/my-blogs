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

snippet7 = `
  private readonly ILogger<HomeController> _logger;
    private readonly StoreContext _context;

    public HomeController(ILogger<HomeController> logger, StoreContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        MasterDetailViewModel vm = new MasterDetailViewModel();
        //vm.Categories = new List<string>() { "Beverages", "Condiments", "Confections", "Dairy Products", "Grains/Cereals", "Meat/Poultry", "Produce", "Seafood" };

        vm.ProductTypes = _context.ProductTypes.ToList();
        vm.ProductBrands = _context.ProductBrands.ToList();

        vm.Products = _context.Products.ToList();
        vm.CatDDL = new List<SelectListItem>();

        for (int i = 0; i < vm.ProductTypes.Count; i++)
        {
            vm.CatDDL.Add(new SelectListItem() { Text = vm.ProductTypes[i].Name, Value = vm.ProductTypes[i].Id.ToString() });
        }
        return View(vm);
    }
`

snippet8 = `
      <div class="d-flex flex-column justify-content-between">
            <h4 class="mb-4" style="letter-spacing: 0.07rem;">View Products By Category</h4>
            <div class="d-flex justify-content-start">
                <p>Select a Category.</p>
                <select asp-for="Category" asp-items="Model.CatDDL" id="catDDL"></select>
            </div>
        </div>
`

snippet9 = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Product Type
                    </th>
                    <th>
                        Product Brand
                    </th>
                    <th>
                        Price
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach (var item in Model.Products)
                {
                    <tr>
                        <td>
                            @Html.DisplayFor(modelItem => item.Name)
                        </td>
                        <td>
                            @Html.DisplayFor(modelItem => item.ProductType.Name)
                        </td>
                        <td>
                            @Html.DisplayFor(modelItem => item.ProductBrand.Name)
                        </td>
                        <td>
                            $@Html.DisplayFor(modelItem => item.Price)
                        </td>
                        <td>
                            <a asp-action="Edit" asp-route-id="@item.Id"><div class='fa fa-edit'></div></a> |
                            <a asp-action="Details" asp-route-id="@item.Id"><div class='fa fa-info'></div></a> |
                            <a asp-action="Delete" asp-route-id="@item.Id"><div class='fa fa-trash'></div></a>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
`

snippet10 = `
async Task SeedDatabaseAsync()
{
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var loggerFactory = services.GetRequiredService<ILoggerFactory>();
        try
        {
            var context = services.GetRequiredService<StoreContext>();
            await context.Database.MigrateAsync();
            await StoreContextSeed.SeedAsync(context, loggerFactory);

        }
        catch (Exception ex)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(ex, "An error occured during migration");
        }
    }

}
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
