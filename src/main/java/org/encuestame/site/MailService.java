package org.encuestame.site;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service("mailService")
public class MailService implements IMail{

    @Autowired
    private MailSender mailSender;

    /*
     * (non-Javadoc)
     * @see org.encuestame.site.IMail#sendMail(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
     */
    public void sendMail(String from, String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);

    }

}