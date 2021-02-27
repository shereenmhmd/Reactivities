using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Value> Values { get; set; }

        public DbSet<Activity> Activities { get; set; }


        //inserting data into values table == Value intity
        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Value>().HasData(
                new Value { id = 1, name = "value 101" },
                new Value { id = 2, name = "value 102" },
                new Value { id = 3, name = "value 103" }
            );
        }
    }
}
