using AutoMapper;
using ImmoParkApp.DTOs;
using ImmoParkApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Profiles
{
    public class PropertiesProfile : Profile
    {
        //Mapping entre Domain Model Internal et Domain Model External 
        public PropertiesProfile()
        {
            //Mapping : Source -> Target
            CreateMap<Property, PropertyReadDto>();
            CreateMap<PropertyCreateDto, Property>();
            CreateMap<PropertyUpdateDto, Property>();
        } 
    }
}
