using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace AARCO.Models
{
    public class MMarcas
    {
       
        public List<Marcas> Consultar(string token)
        {
            List<Marcas> list = new List<Marcas>();

            try
            {

                using (var cliente = new HttpClient())
                {
                    cliente.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                    Task<HttpResponseMessage> httpResponseMessage = cliente.GetAsync("https://localhost:44376/api/Marcas");
                    httpResponseMessage.Wait();
                    var httpresponde = httpResponseMessage.Result;
                    if (httpresponde.IsSuccessStatusCode)
                    {
                        Task<string> asincornoleerhttp = httpresponde.Content.ReadAsStringAsync();
                        asincornoleerhttp.Wait();
                        string json = asincornoleerhttp.Result;
                        list = JsonConvert.DeserializeObject<List<Marcas>>(json);

                    }
                    else
                    {
                        throw new Exception($"Web Api. Repondio con error.{httpresponde.StatusCode}");
                    }

                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Web Api. Repondio con error.{ex.Message}");
            }

            return list;
        }
    }
}