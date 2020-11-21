using AutoMapper;
using ImmoParkApp.DTOs;
using ImmoParkApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Profiles
{
    public class ContractsProfile : Profile
    {
        public ContractsProfile()
        {
            CreateMap<Contract, ContractReadDto>();
            CreateMap<ContractCreateDto, Contract>();
            CreateMap<ContractUpdateDto, Contract>();
        }
    }
}
