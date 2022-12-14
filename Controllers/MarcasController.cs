using AARCO.Models;
using AARCO.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AARCO.Controllers
{
    [ValidarUsuario]
    public class MarcasController : Controller
    {
        MMarcas _metodos = new MMarcas();

        // GET: Marcas
        public ActionResult Index()
        {
            string token = (string)Session["token"];
            List<Marcas> marcas = _metodos.Consultar(token);
            return View(marcas);
        }

        // GET: Marcas/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Marcas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Marcas/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Marcas/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Marcas/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Marcas/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Marcas/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
