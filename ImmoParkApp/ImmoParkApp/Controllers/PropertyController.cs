using AutoMapper;
using ImmoParkApp.Data;
using ImmoParkApp.DTOs;
using ImmoParkApp.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Controllers
{
    [Route("immopark/api/property")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class PropertyController : ControllerBase
    {
        private readonly IImmoParkRepository _repository;
        private readonly IMapper _mapper;

        public PropertyController(IImmoParkRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        ////////////////
        //// Property ////

        [HttpGet]
        public ActionResult<IEnumerable<PropertyReadDto>> GetAllProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
        }

        [HttpGet("{id}", Name ="GetPropertyById")]
        public ActionResult<PropertyReadDto> GetPropertyById(int id)
        {
            Property propertyItem = _repository.GetPropertyById(id);
            if (propertyItem != null)
            {
                return Ok(_mapper.Map<PropertyReadDto>(propertyItem));
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        {
            Property propertyModel = _mapper.Map<Property>(propertyCreateDto);
            _repository.CreateProperty(propertyModel);
            _repository.SaveChanges();

            //pas besoin car le ReadDto ne fait pas le mappiing de ID
            //var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetPropertyById), new { Id = propertyModel.ID }, propertyModel);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateProperty(int id, PropertyUpdateDto propertyUpdateDto)
        {
            Console.WriteLine("OK");
            Property propertyModelFromRepo = _repository.GetPropertyById(id);
            if (propertyModelFromRepo == null)
            {
                return NotFound();
            }
            else
            {
                _mapper.Map(propertyUpdateDto, propertyModelFromRepo);
                _repository.UpdateProperty(propertyModelFromRepo);
                _repository.SaveChanges();

                return NoContent();
            }

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteProperty(int id)
        {
            Property propertyModelFromRepo = _repository.GetPropertyById(id);
            if (propertyModelFromRepo == null)
            {
                return NotFound();
            }

            _repository.DeleteProperty(propertyModelFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }


    }
}
