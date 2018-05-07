using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VueVs.Startup))]
namespace VueVs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
