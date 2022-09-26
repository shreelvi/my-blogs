import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-asp-net-auth-identity',
  templateUrl: './asp-net-auth-identity.component.html',
  styleUrls: ['./asp-net-auth-identity.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AspNetAuthIdentityComponent implements OnInit {

  pageId = "/blog-auth";

  snippet1 = `
  services.AddDbContext<AppIdentityDbContext>(x => 
    x.UseSqlite(Configuration.GetConnectionString("IdentityConnection")));`

  snippet2 = `
  namespace Infrastructure.Identity
  {
      public class AppIdentityDbContext : IdentityDbContext<AppUser> // This ensures that EF will create our AppUser table with its properties
      {
          public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
          {
          }

          protected override void OnModelCreating(ModelBuilder builder)
          {
              base.OnModelCreating(builder);
          }
      }
  }
  `

  snippet3 = `
  "ConnectionStrings": {
    "DefaultConnection":  "Data source=skinet.db",
    "IdentityConnection": "Data source=identity.db"
  }
  `

  snippet4 = `
  dotnet ef migrations add IdentityInitial -c AppIdentityDbContext -o Infrastructure/Identity/Migrations
  `

  snippet5 = `
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Joe",
                    Email = "joe@test.com",
                    UserName = "joe123",
                    Address = new Address
                    {
                        FirstName = "Joe",
                        LastName = "Smith",
                        Street = "1234 second st.",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90210"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
  `

  snippet6 = `
  
  `

  snippet7 = `
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services)
        {
            var builder = services.AddIdentityCore<AppUser>();

            builder = new IdentityBuilder(builder.UserType, builder.Services);
            builder.AddEntityFrameworkStores<AppIdentityDbContext>();
            builder.AddSignInManager<SignInManager<AppUser>>();

            services.AddAuthentication();

            return services;
        }
    }
  `

  snippet8 = `
  services.AddIdentityServices();
  `

  snippet9 = `
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var scope =  host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var context = services.GetRequiredService<StoreContext>();
                    await context.Database.MigrateAsync();

                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    var identityContext = services.GetRequiredService<AppIdentityDbContext>();
                    await identityContext.Database.MigrateAsync();
                    await AppIdentityDbContextSeed.SeedUsersAsync(userManager);
                    
                }
                catch(Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "An error occured during the migration");
                }
            }
            
            host.Run();
        }
  `

  snippet10 = `
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if(user == null)
            {
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                return Unauthorized();
            }

            return new UserDto
            {
                Email =  user.Email,
                Token = "This will be a JWT token",
                DisplayName = user.DisplayName
            };
        }
    }
  `

  snippet11 = `
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            return new UserDto
            {
                DisplayName = user.DisplayName,
                Token = "This will be a token",
                Email = user.Email
            };
        }
  `

  snippet12 = `
    public class TokenService: ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _config = config;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));
        }

        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.DisplayName)
            };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds,
                Issuer = _config["Token:Issuer"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
  `

  snippet14 = `
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => 
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),
                        ValidIssuer = config["Token:Issuer"],
                        ValidateIssuer = true,
                    };
                });
  `

  constructor(private title: Title) { 
    this.title.setTitle('Blogs | Authentication and Authorization on ASP.NET Core Web API with Angular SPA using Identity (JWT Token)')
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
