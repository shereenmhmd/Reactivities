using Application.Activities;
using Application.Core;
using Application.Interfaces;
using Application.Interfaces.Security;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        // add more services and cleans up Startup Class
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
                                        IConfiguration Configuration)
        {
            services.AddDbContext<Persistence.DataContext>(opt =>
                {
                    opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
                });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(typeof(List.Handler).Assembly);

            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            services.AddScoped<IUserAccessor,UserAccessor>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });

            return services;
        }

    }
}