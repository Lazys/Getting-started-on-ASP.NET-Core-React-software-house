using SoftwareHouse.Services.DataContracts;
using System.Collections.Generic;

namespace SoftwareHouse.Services.Interfaces
{
    public interface IProjectsService
    {
        List<ProjectDto> GetAll();
    }
}