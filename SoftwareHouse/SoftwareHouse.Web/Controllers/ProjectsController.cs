using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoftwareHouse.Web.ViewModels.Projects;
using SoftwareHouse.Contract.Interfaces;
using SoftwareHouse.Contract.DataContracts;

namespace SoftwareHouse.Web.Controllers
{
    [Authorize]
    public class ProjectsController : Controller
    {
        private IProjectsService _projectsService;

        public ProjectsController(IProjectsService projectsService)
        {
            _projectsService = projectsService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("/{id}")]
        public IActionResult Index(int id)
        {
            return View();
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View(new ProjectCreateViewModel());
        }

        [HttpPost]
        public IActionResult Add(ProjectCreateViewModel viewModel)
        {
            var result = _projectsService.Add(new AddProjectDto
            {
                Name = viewModel.Name,
                Description = viewModel.Description
            });

            if (result.IsSuccess)
            {
                return RedirectToAction(nameof(ProjectsController.Index), "Projects");
            }
            else
            {
                viewModel.ErrorMessage = result.ErrorMessage;
                return View(viewModel);
            }
        }
    }
}
