using SoftwareHouse.Contract.DataContracts;
using System.Collections.Generic;
using SoftwareHouse.Contract.Common;

namespace SoftwareHouse.Contract.Interfaces
{
    public interface IProjectsRepository
    {
        List<ProjectDto> GetAll();
        ProjectDto GetByName(string projectName);
        void Add(AddProjectDto project);
        void Delete(int id);
        CommonResult<ProjectDto> GetById(int id);
    }
}