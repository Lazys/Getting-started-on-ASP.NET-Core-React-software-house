using SoftwareHouse.Contract.DataContracts;
using System.Collections.Generic;

namespace SoftwareHouse.Contract.Interfaces
{
    public interface IProjectsRepository
    {
        List<ProjectDto> GetAll();
    }
}