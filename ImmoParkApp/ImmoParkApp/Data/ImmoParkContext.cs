using ImmoParkApp.Controllers;
using ImmoParkApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Data
{
    public class ImmoParkContext : DbContext
    {
        public ImmoParkContext(DbContextOptions<ImmoParkContext> opt) : base(opt)
        {

        }

        //attributs
        //models auquel on va creer les tables using EF
        
        public DbSet<Property> Properties { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Contract> Contracts { get; set; }
    }
}
