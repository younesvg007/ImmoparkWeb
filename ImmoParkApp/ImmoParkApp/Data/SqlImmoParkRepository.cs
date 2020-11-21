using ImmoParkApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Data
{
    public class SqlImmoParkRepository : IImmoParkRepository
    {
        private readonly ImmoParkContext _context;

        public SqlImmoParkRepository(ImmoParkContext context)
        {
            _context = context;
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        /////////////////
        //// Client ////

        public void CreateClient(Client client)
        {
            if (client != null)
            {
                _context.Clients.Add(client);
            }
            else
            {
                throw new ArgumentNullException(nameof(client));
            }
        }

        public void DeleteClient(Client client)
        {
            if (client != null)
            {
                _context.Clients.Remove(client);
            }
            else
            {
                throw new ArgumentNullException(nameof(client));
            }
        }

        public void UpdateProfile(Client client)
        {
            _context.Update(client);
        }

        public IEnumerable<Client> GetAllClients()
        {
            return _context.Clients.ToList();
        }

        public Client GetClientById(int id)
        {
            return _context.Clients.FirstOrDefault(c => c.NatRegister == id);
        }

        public void UpdateClient(Client client)
        {
            //nothing;
        }


        ///////////////////
        //// Property ////

        public void CreateProperty(Property property)
        {
            if (property != null)
            {
                _context.Properties.Add(property);
            }
            else
            {
                throw new ArgumentNullException(nameof(property));
            }
        }

        public void DeleteProperty(Property property)
        {
            if (property != null)
            {
                _context.Properties.Remove(property);
            }
            else
            {
                throw new ArgumentNullException(nameof(property));
            }
        }
       
        public IEnumerable<Property> GetAllProperties()
        {
            return _context.Properties.ToList();
        }

        public Property GetPropertyById(int id)
        {
            return _context.Properties.FirstOrDefault(p => p.ID == id);
        }

        public void UpdateProperty(Property property)
        {
            //nothing;
        }


        ///////////////////
        //// Contract ////

        public IEnumerable<Contract> GetAllContracts()
        {
            return _context.Contracts.ToList();
        }

        public Contract GetContractById(int id)
        {
            return _context.Contracts.FirstOrDefault(p => p.ID == id);
        }

        public void CreateContract(Contract contract)
        {
            if (contract != null)
            {
                _context.Contracts.Add(contract);
            }
            else
            {
                throw new ArgumentNullException(nameof(contract));
            }
        }

        public void UpdateContract(Contract contract)
        {
            // nothing
        }

        public void DeleteContract(Contract contract)
        {
            if (contract != null)
            {
                _context.Contracts.Remove(contract);
            }
            else
            {
                throw new ArgumentNullException(nameof(contract));
            }
        }

      
    }
}
