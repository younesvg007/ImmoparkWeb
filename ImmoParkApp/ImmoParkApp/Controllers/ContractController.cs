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
    [Route("immopark/api/contract")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class ContractController : ControllerBase
    {
        private readonly IImmoParkRepository _repository;
        private readonly IMapper _mapper;

        public ContractController(IImmoParkRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ContractReadDto>> GetAllContracts()
        {
            var contractItems = _repository.GetAllContracts();

            return Ok(_mapper.Map<IEnumerable<ContractReadDto>>(contractItems));
        }

        [HttpGet("{id}", Name = "GetContractById")]
        public ActionResult<ContractReadDto> GetContractById(int id)
        {
            Contract contractItems = _repository.GetContractById(id);
            if (contractItems != null)
            {
                return Ok(_mapper.Map<ContractReadDto>(contractItems));
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<ContractReadDto> CreateContract(ContractCreateDto contractCreateDto)
        {
            Contract contractModel = _mapper.Map<Contract>(contractCreateDto);
            _repository.CreateContract(contractModel);
            
            Client clt =_repository.GetClientById(contractCreateDto.idClient);
            clt.isRenter = true;
            _repository.UpdateProfile(clt);

            _repository.SaveChanges();
            //pas besoin car le ReadDto ne fait pas le mappiing de ID
            //var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetContractById), new { Id = contractModel.ID }, contractModel);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateContract(int id, ContractUpdateDto contractUpdateDto)
        {
            Contract contractModelFromRepo = _repository.GetContractById(id);
            if (contractModelFromRepo == null)
            {
                return NotFound();
            }
            else
            {
                _mapper.Map(contractUpdateDto, contractModelFromRepo);
                _repository.UpdateContract(contractModelFromRepo);
                _repository.SaveChanges();

                return NoContent();
            }

        }

        [HttpDelete("{id}")]
        public ActionResult DeleteContract(int id)
        {
            Contract contractModelFromRepo = _repository.GetContractById(id);
            if (contractModelFromRepo == null)
            {
                return NotFound();
            }

            _repository.DeleteContract(contractModelFromRepo);

            Client clt = _repository.GetClientById(contractModelFromRepo.idClient);

            if (clt != null)
            {
                clt.isRenter = false;
                _repository.UpdateProfile(clt);
            }

            _repository.SaveChanges();

            return NoContent();
        }
    }
}
