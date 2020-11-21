using ImmoParkApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Data
{
    public interface IImmoParkRepository
    {
        bool SaveChanges();

        ////////////////
        //// Client ////

        IEnumerable<Client> GetAllClients();

        Client GetClientById(int id);

        void CreateClient(Client client);

        void UpdateProfile(Client client);

        void UpdateClient(Client client);

        void DeleteClient(Client client);

        ////////////////
        //// Property ////
       
        IEnumerable<Property> GetAllProperties();

        Property GetPropertyById(int id);

        void CreateProperty(Property property);

        void UpdateProperty(Property property);

        void DeleteProperty(Property property);

        ////////////////
        //// Property ////

        IEnumerable<Contract> GetAllContracts();

        Contract GetContractById(int id);

        void CreateContract(Contract contract);

        void UpdateContract(Contract contract);

        void DeleteContract(Contract contract);
    }
}
