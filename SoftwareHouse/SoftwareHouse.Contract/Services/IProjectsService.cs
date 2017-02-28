using SoftwareHouse.Contract.DataContracts;
using System.Collections.Generic;

namespace SoftwareHouse.Contract.Interfaces
{
    public interface IProjectsService
    {
        List<ProjectDto> GetAll();
    }
}