/*
 ************************************************************************************
 * Copyright (C) 2001-2010 encuestame: system online surveys Copyright (C) 2010
 * encuestame Development Team.
 * Licensed under the Apache Software License version 2.0
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to  in writing,  software  distributed
 * under the License is distributed  on  an  "AS IS"  BASIS,  WITHOUT  WARRANTIES  OR
 * CONDITIONS OF ANY KIND, either  express  or  implied.  See  the  License  for  the
 * specific language governing permissions and limitations under the License.
 ************************************************************************************
 */
package org.encuestame.core.test.persistence.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.encuestame.core.mail.MailService;
import org.encuestame.core.persistence.dao.imp.IProject;
import org.encuestame.core.persistence.domain.CatEmailLists;
import org.encuestame.core.persistence.domain.CatEmails;
import org.encuestame.core.persistence.domain.SecUser;
import org.encuestame.core.persistence.domain.SecUserSecondary;
import org.encuestame.core.test.service.config.AbstractBase;
import org.encuestame.utils.mail.InvitationBean;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Test List Email Catalog.
 *
 * @author Morales, Diana Paola paola AT encuestame.org
 * @since June 24, 2010
 * @version $Id: $
 */
public class TestCatEmailLists extends AbstractBase {

    private CatEmailLists emailList;
    private CatEmails emails;
    private SecUser user;
    private SecUserSecondary secondary;

     /** {@link IProject} **/
    @Autowired
    MailService  mailService;

    @Before
    public void before() {
        this.user = createUser();
        this.secondary = createSecondaryUser("paola", this.user);
        this.emailList = createDefaultListEmail(this.secondary.getSecUser());
        createDefaultListEmail(this.user, "default");
        this.emails = createDefaultEmails("paola@jotadeveloper.com", this.emailList);
    }


    @Test(timeout=60000)
    public void testSendEmail(){
        createDefaultEmails(getProperty("mail.test.email2"), this.emailList);
        createDefaultEmails(getProperty("mail.test.email3"), this.emailList);
        final List<CatEmails> catEmails = getCatEmailDao().findEmailsByListId(
                this.emailList.getIdList());
        for (CatEmails catemails : catEmails) {
              assertNotNull(catemails.getEmail());
              mailService.send(catemails.getEmail().toString(), "Welcome Encuestame List", "Welcome Encuestame List");
            }
    }

    @Test(timeout=60000)
    public void testSendInvitation(){
          createDefaultEmails(getProperty("mail.test.email2"), this.emailList);
          final List<CatEmails> catEmails = getCatEmailDao().findEmailsByListId(
                  this.emailList.getIdList());
          for (CatEmails catemails : catEmails) {
                assertNotNull(catemails.getEmail());
                final InvitationBean invitation = new InvitationBean();
                invitation.setCode("1253");
                invitation.setEmail((catemails.getEmail().toString()));
                invitation.setListName(this.emailList.getListName());
                invitation.setUrlInvitation(URLPOLL);
                mailService.sendEmailInvitation(invitation);
              }
      }



    /**
     * Test Find Emails By List Id.
     */
    @Test
    public void testFindEmailByListId() {
        final List<CatEmails> catEmails = getCatEmailDao().findEmailsByListId(
                this.emailList.getIdList());
        assertNotNull(catEmails);
        assertEquals("Should be equals", 1, catEmails.size());
    }

    /**
     * Test Find All Email Lists.
     */
    @Test
    public void testFindAllEmailList() {
        final List<CatEmailLists> catLists = getCatEmailDao()
                .findAllEmailList();
        assertEquals("Should be equals", 2, catLists.size());
    }

    /**
     * Test Find Email Lists by User.
     */
    @Test
    public void testFindListByUser() {
        final List<CatEmailLists> listByUser = getCatEmailDao().findListbyUser(
                this.user.getUid());
        assertNotNull(listByUser);
        assertEquals("Should be equals", 2, listByUser.size());
    }

    /**
     * Test List Emails by Keyword.
     */
    @Test
    public void testListEmailsByKeyword() {
        final String keyword = "default";
        final List<CatEmailLists> catLists = getCatEmailDao()
                .findAllEmailList();
        for (CatEmailLists catListEmails : catLists) {
            assertNotNull(catListEmails.getListName());
        }
        assertEquals("Should be", 2 ,catLists.size());
        final List<CatEmailLists> listEmails = getCatEmailDao()
                    .getListEmailsByKeyword(keyword, this.user.getUid());
        assertNotNull(listEmails);
        assertEquals("Should be equals", 2, listEmails.size());
    }

    /**
     * Test Emails by Keyword.
     */
    @Test
    public void testEmailsByKeyword() {
        final String keywordEmail = "jotadeveloper.com";
        final List<CatEmails> emails = getCatEmailDao().getEmailsByKeyword(
                keywordEmail, this.user.getUid());

        assertEquals("Should be equals", 1, emails.size());
    }

}
