package org.encuestame.site;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageConstroller {

    /**
     * Log.
     */
    private Log log = LogFactory.getLog(this.getClass());

    /**
     * Index Controller.
     *
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String homeController(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        model.put("menu", "home");
        return "index";
    }

    /**
     * Download Controller.
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/download", method = RequestMethod.GET)
    public String downloadController(ModelMap model,
            HttpServletRequest request, HttpServletResponse response) {
        model.put("menu", "download");
        return "download";
    }

    /**
     * Features.
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/features", method = RequestMethod.GET)
    public String featuresController(ModelMap model,
            HttpServletRequest request, HttpServletResponse response) {
        model.put("menu", "features");
        return "features";
    }

    /**
     * Screehosts
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/screenshots", method = RequestMethod.GET)
    public String screenshotsController(ModelMap model,
            HttpServletRequest request, HttpServletResponse response) {
        model.put("menu", "screenshots");
        return "screenshots";
    }

    /**
     * About
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String aboutController(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        model.put("menu", "about");
        return "about";
    }

    @RequestMapping(value = "/contributors", method = RequestMethod.GET)
    public String contributorsController(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        model.put("menu", "contributors");
        return "contributors";
    }

    /**
     * Source.
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/source", method = RequestMethod.GET)
    public String sourceController(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        model.put("menu", "source");
        return "source";
    }

    /**
     * Index view.
     *
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        return "redirect:/index";
    }
}
