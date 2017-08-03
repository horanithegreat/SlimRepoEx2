/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.controller;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;

/**
 * Controller that will accessed when 'localhost:8888' is entered.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/12/2016] 0.01 – Lehmar Cabrillos  – Initial codes.
 */
public class IndexController extends Controller {
    
    /**
     * The function that will be ran first upon entering this controller.
     * Screen will transition to 'bentoMain.html'.
     */
    @Override
    public Navigation run() throws Exception {
        System.out.println("IndexController.run " + "start, end");
        // screen redirection
        return forward("/html/bentoApp.html");
    }
}
