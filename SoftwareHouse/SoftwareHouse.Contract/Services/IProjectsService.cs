using SoftwareHouse.Contract.Common;
using SoftwareHouse.Contract.DataContracts;
using System.Collections.Generic;

namespace SoftwareHouse.Contract.Interfaces
{
    public interface IProjectsService
    {
        List<ProjectDto> GetAll();
        CommonResult Add(AddProjectDto project);
        void Delete(int id);
    }
}