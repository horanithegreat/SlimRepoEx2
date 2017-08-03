/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.controller;

import org.slim3.controller.Controller;
import org.slim3.controller.Navigation;

import bentoApp.dto.DishDto;
import bentoApp.service.DishService;


/**
 * Controller used to insert an 'dish' to the datastore.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 � Lehmar Cabrillos  � Initial codes.
 */
public class RegisterDishController extends Controller {
    
    /**
     * Service object that will be used to call the insert function to datastore.
     */
    DishService bentoService = new DishService();
    
    /**
     * The funtion that will be ran first upon entering this controller.
     * Used to insert a 'dish' entity to the datastore.
     */
    @Override
    protected Navigation run() throws Exception {
        System.out.println("RegisterDishController.run " + "start");
        /**
         * Used to store the information from the request and send to the
         * service class.
         */
        DishDto dishDto = new DishDto();
        
        try {            
            /*
             * TODO: Get all the information from the request object.
             * Refer to the id of the input fields in the HTML file
             * 
             * Ex.
             * <input class ="inputField" type="text" id="dishName" placeholder="E.g. Beef Teriyaki" required><br>
             * -> String name = request.getParameter("dishName");
             */
            dishDto.setName(request.getParameter("dishName"));
            dishDto.setType(request.getParameter("dishType"));
            dishDto.setPrice(Double.parseDouble(request.getParameter("dishPrice")));
            /*
             * TODO: Call insertDish() of DishService to insert the data.
             */
            bentoService.insertDish(dishDto);
        } catch (Exception e) {
            System.out.println("RegisterDishController.run.exception " + e.toString());
        }
        
        System.out.println("RegisterDishController.run " + "end");
        // screen redirection.
        return forward("/html/bentoApp.html/");
    }

}
