using System;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> List()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Details(Guid id)
        {
            var result = await Mediator.Send(new Details.Query { Id = id });
            return HandleResult(result);

        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            // activity is extracted automatically from request body
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        [Authorize(Policy = "IsActivityHost")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            //the id maybe not sent in the updated activity body
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }
        [Authorize(Policy = "IsActivityHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/attend")]
        public async Task<IActionResult> Attend(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateAttendence.Command
            {
                Id = id
            }));

        }


    }
}