/*
 ************************************************************************************
 * Copyright (C) 2001-2009 encuestame: system online surveys Copyright (C) 2009
 * encuestame Development Team.
 * Licensed under the Apache Software License version 2.0
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to  in writing,  software  distributed
 * under the License is distributed  on  an  "AS IS"  BASIS,  WITHOUT  WARRANTIES  OR
 * CONDITIONS OF ANY KIND, either  express  or  implied.  See  the  License  for  the
 * specific language governing permissions and limitations under the License.
 ************************************************************************************
 */
package org.encuestame.core.test.persistence.pojos;

import static org.junit.Assert.*;

import org.encuestame.core.persistence.pojo.QuestionsAnswers;
import org.encuestame.core.test.service.config.AbstractBase;
import org.junit.Test;

/**
 * Test Question Answer.
 * @author Morales,Diana Paola paola@encuestame.org
 * @since  March 16, 2009
 * @version $Id: $
 */
public class TestQuestionAnswer extends AbstractBase {

    /**
     * Test QuestionAnswer.
     **/
    @Test
    public void testQuestionAnswer(){
        final QuestionsAnswers qanswer = new QuestionsAnswers();
        qanswer.setAnswer("Yes");
        qanswer.setQuestions(createQuestion("Are you single?", "yesNo",createUser()));
        qanswer.setUniqueAnserHash("AKDL12");
        getQuestionDaoImp().saveOrUpdate(qanswer);
        assertNotNull(qanswer);

    }


}
