package org.encuestame.site;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.encuestame.site.contact.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

@Controller
@SessionAttributes
public class ContactController {

    @Autowired
    public IMail mailService;

    /**
     *
     * @param contact
     * @param result
     * @return
     */
    @RequestMapping(value = "/sendMessage", method = RequestMethod.POST)
    public String addContact(@ModelAttribute("contact")
                            Contact contact, BindingResult result) {

        System.out.println("First Name:" + contact.getName() +
                    "Last Name:" + contact.getComment());
        getMailService().sendMail(contact.getEmail(), "juanpicado19@gmail.com", "Contact Info", contact.getComment());
        return "redirect:contact";
    }

    /**
     *
     * @param model
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/contact", method = RequestMethod.GET)
    public ModelAndView contactController(ModelMap model, HttpServletRequest request,
            HttpServletResponse response) {
        final ModelAndView v = new ModelAndView("contact", "command", new Contact());
        v.addObject("menu", "interest");
        return v;
    }

    /**
     * @return the mailService
     */
    public IMail getMailService() {
        return mailService;
    }

    /**
     * @param mailService the mailService to set
     */
    public void setMailService(IMail mailService) {
        this.mailService = mailService;
    }


}
