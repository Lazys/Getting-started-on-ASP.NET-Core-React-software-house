using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace SoftwareHouse.Web.Controllers
{
    public class ProjectsController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return View();
        }
    }
}
