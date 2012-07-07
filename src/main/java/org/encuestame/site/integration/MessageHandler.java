/**
 *
 */
package org.encuestame.site.integration;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.integration.Message;
import org.springframework.integration.MessagingException;
import org.springframework.stereotype.Component;

/**
 * @author juan
 *
 */
@Component
public class MessageHandler implements org.springframework.integration.core.MessageHandler{

     private static final Log log = LogFactory.getLog(MessageHandler.class);

    @Override
    public void handleMessage(Message<?> arg0) throws MessagingException {
          log.debug("Received message:========> " + arg0);
    }


}
