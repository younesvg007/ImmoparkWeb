using AutoMapper;
using DinkToPdf;
using DinkToPdf.Contracts;
using ImmoParkApp.Data;
using ImmoParkApp.DTOs;
using ImmoParkApp.Models;
using ImmoParkApp.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using System;
using System.Collections.Generic;
using System.IO;
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
        private readonly IConverter _converter;

        public ContractController(IImmoParkRepository repository, IMapper mapper, IConverter converter)
        {
            _repository = repository;
            _mapper = mapper;
            _converter = converter;
        }

        [HttpGet("pdfgenerator/{id}")]
        public IActionResult GeneratePDF(int id)
        {
            Contract contractItem = _repository.GetContractById(id);
            var globalSettings = new GlobalSettings
            {
                ColorMode = ColorMode.Color,
                Orientation = Orientation.Portrait,
                PaperSize = PaperKind.A4,
                Margins = new MarginSettings { Top = 10 },
                DocumentTitle = "PDF Contract",
                //Out = @"C:\Users\youne\Documents\Contract.pdf" //va telecharger doc PDF dans les documents
            };

            var objectSettings = new ObjectSettings
            {
                PagesCount = true,
                HtmlContent = TemplateGenerator.GetHTMLString(contractItem),
                WebSettings = { DefaultEncoding = "utf-8", UserStyleSheet = Path.Combine(Directory.GetCurrentDirectory(), "Assets", "Style.css") },
                HeaderSettings = { FontName = "Tahoma", FontSize = 12, Line = true, Center = "ImmoPark" },
                FooterSettings = { FontName = "Tahoma", FontSize = 12, Right = "Page [page] / [toPage]", Line = true, Center = "ImmoPark" }
            };

            var pdf = new HtmlToPdfDocument
            {
                GlobalSettings = globalSettings,
                Objects = { objectSettings }
            };

            var file = _converter.Convert(pdf);

            return File(file, "application/pdf", "Contract.pdf");
        }

        [HttpGet("wordgenerator/leasecontract/{id}")]
        public IActionResult GenerateWordLeaseContract(int id)
        {
            Contract contractItem = _repository.GetContractById(id);
            Property propertyItem = _repository.GetPropertyById(contractItem.idProperty);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/LeaseContract.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "Id", "StartDate", "enddate", "LeaseDuration", "PropertyAddress", "Type", "Floor", "RentPrice", "BasicIndex", "TaxesPrice", "AmountGarantee", "SignatureDate", "NatRegister", "IdProperty" };
                string[] fieldValues = {
                    contractItem.ID.ToString(),
                    contractItem.StartDate,
                    contractItem.EndDate,
                    contractItem.Duration + " Months",
                    propertyItem.Address,
                    propertyItem.Type,
                    propertyItem.Floor,
                    propertyItem.RentPrice + " €",
                    contractItem.IndexBase,
                    propertyItem.TaxesPrice + " €",
                    contractItem.AmountGarantee + " €",
                    contractItem.SignatureDate,
                    contractItem.idClient.ToString(),
                    contractItem.idProperty.ToString()

                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "LeaseContract.docx");

            }
        }

        [HttpGet("wordgenerator/depositclient/{id}")]
        public IActionResult GenerateWordDepositClient(int id)
        {
            Contract contractItem = _repository.GetContractById(id);
            Client clientItem = _repository.GetClientById(contractItem.idClient);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/DepositForClient.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "IdContract", "Civility", "FirstName", "LastName", "Sexe", "Address", "PostCode", "Town", "Country", "BirthDay", "Age", "BirthPlace", "Email", "Gsm", "NatRegister" };
                string[] fieldValues = {
                    contractItem.ID.ToString(),
                    clientItem.Civility,
                    clientItem.FirstName,
                    clientItem.LastName,
                    clientItem.Sexe,
                    clientItem.Address,
                    clientItem.PostCode,
                    clientItem.Town,
                    clientItem.Country,
                    clientItem.BirthDay,
                    clientItem.Age + " Years",
                    clientItem.BirthPlace,
                    clientItem.Email,
                    clientItem.Gsm,
                    clientItem.NatRegister.ToString(),
                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "DepositClient.docx");

            }
        }

        [HttpGet("wordgenerator/stateofentry/{id}")]
        public IActionResult GenerateWordStateOfEntry(int id)
        {
            Contract contractItem = _repository.GetContractById(id);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/StateOfEntry.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "IdContract", "IdProperty", "IndexEntryWater", "IndexEntryGaz", "IndexEntryElectricity" };
                string[] fieldValues = {
                    contractItem.ID.ToString(),
                    contractItem.idProperty.ToString(),
                    contractItem.IndexEntryWater + " M³",
                    contractItem.IndexEntryGaz + " M³",
                    contractItem.IndexEntryElectricity + " kWh",
                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "StateOfEntry.docx");

            }
        }

        [HttpGet("wordgenerator/stateofexit/{id}")]
        public IActionResult GenerateWordStateOfExit(int id)
        {
            Contract contractItem = _repository.GetContractById(id);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/StateOfExit.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "IdContract", "IdProperty", "IndexOutWater", "IndexOutGaz", "IndexOutElectricity" };
                string[] fieldValues = {
                    contractItem.ID.ToString(),
                    contractItem.idProperty.ToString(),
                    contractItem.IndexOutWater + " M³",
                    contractItem.IndexOutGaz + " M³",
                    contractItem.IndexOutElectricity + " kWh",
                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "StateOfExit.docx");

            }
        }

        [HttpGet("wordgenerator/earlyleasetermination/{id}")]
        public IActionResult GenerateWordEarlyLeaseTermination(int id)
        {
            Contract contractItem = _repository.GetContractById(id);
            Client clientItem = _repository.GetClientById(contractItem.idClient);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/EarlyLeaseTermination.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "FirstName", "LastName", "AddressClient", "PostCode", "Town", "Email", "Gsm", "Id", "Civility", "SignatureDate", "StartDate", "EndDate" };
                string[] fieldValues = {
                    clientItem.FirstName,
                    clientItem.LastName,
                    clientItem.Address,
                    clientItem.PostCode,
                    clientItem.Town,
                    clientItem.Email,
                    clientItem.Gsm,
                    contractItem.ID.ToString(),
                    clientItem.Civility,
                    contractItem.SignatureDate,
                    contractItem.StartDate,
                    contractItem.EndDate,
                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "EarlyLeaseTermination.docx");

            }
        }

        [HttpGet("wordgenerator/leaseconger/{id}")]
        public IActionResult GenerateWordLeaseConger(int id)
        {
            Contract contractItem = _repository.GetContractById(id);
            Client clientItem = _repository.GetClientById(contractItem.idClient);
            Property propertyItem = _repository.GetPropertyById(contractItem.idProperty);

            //Opens the Word template document
            FileStream fileStreamPath = new FileStream(@"Documentation/LeaseConger.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
            {
                //«StartDate»
                string[] fieldNames = { "FirstName", "LastName", "AddressClient", "PostCode", "Town", "Email", "Gsm", "idProperty", "Civility", "AddressProperty", "SignatureDate", "OutDate" };
                string[] fieldValues = {
                    clientItem.FirstName,
                    clientItem.LastName,
                    clientItem.Address,
                    clientItem.PostCode,
                    clientItem.Town,
                    clientItem.Email,
                    clientItem.Gsm,
                    contractItem.idProperty.ToString(),
                    clientItem.Civility,
                    propertyItem.Address,
                    contractItem.SignatureDate,
                    contractItem.OutDate,
                };

                //Performs the merge
                document.MailMerge.Execute(fieldNames, fieldValues);

                //Saves the Word document to  MemoryStream
                MemoryStream stream = new MemoryStream();
                document.Save(stream, FormatType.Docx);

                stream.Position = 0;

                //Download Word document in the browser
                return File(stream, "application/msword", "LeaseConger.docx");

            }
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
