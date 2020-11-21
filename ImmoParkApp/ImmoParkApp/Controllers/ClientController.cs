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
    [Route("immopark/api/client")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class ClientController : ControllerBase
    {
        private readonly IImmoParkRepository _repository;
        private readonly IMapper _mapper;

        public ClientController(IImmoParkRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        ////////////////
        //// Client ////

        [HttpGet]
        public ActionResult<IEnumerable<ClientReadDto>> GetAllClients()
        {
            var clientItems = _repository.GetAllClients();

            return Ok(_mapper.Map<IEnumerable<ClientReadDto>>(clientItems));
        }

        [HttpGet("{id}", Name = "GetClientById")]
        public ActionResult<ClientReadDto> GetClientById(int id)
        {
            Client clientItem = _repository.GetClientById(id);
            if (clientItem != null)
            {
                return Ok(_mapper.Map<ClientReadDto>(clientItem));
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<ClientReadDto> CreateClient(ClientCreateDto clientCreateDto)
        {
            Client clientModel = _mapper.Map<Client>(clientCreateDto);
            _repository.CreateClient(clientModel);
            _repository.SaveChanges();

            //pas besoin car le ReadDto ne fait pas le mappiing de ID
            //var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetClientById), new { Id = clientModel.NatRegister }, clientModel);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateClient(int id, ClientUpdateDto clientUpdateDto)
        {
            Client clientModelFromRepo = _repository.GetClientById(id);
            if (clientModelFromRepo == null)
            {
                return NotFound();
            }
            else
            {
                _mapper.Map(clientUpdateDto, clientModelFromRepo);
                _repository.UpdateClient(clientModelFromRepo);
                _repository.SaveChanges();

                return NoContent();
            }

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteClient(int id)
        {
            Client clientModelFromRepo = _repository.GetClientById(id);
            if (clientModelFromRepo == null)
            {
                return NotFound();
            }

            _repository.DeleteClient(clientModelFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }
    }
}
