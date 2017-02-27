using SoftwareHouse.DataAccess.Models;
using System.Collections.Generic;

namespace SoftwareHouse.DataAccess.Interfaces
{
    public interface IProjectsRepository
    {
        List<Project> GetAll();
    }
}