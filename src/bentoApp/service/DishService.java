/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.service;

import bentoApp.dao.DishDao;
import bentoApp.dto.DishDto;
import bentoApp.model.DishModel;


/**
 * Contains the functions for inserting an entity to the datastore.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 � Lehmar Cabrillos  � Initial codes.
 */
public class DishService {
    /**
     * Use to access the DAO functions for the dishModel.
     */
    DishDao dishDao = new DishDao();
    
    /**
     * Used to insert an item to the datastore.
     * @param inputDish - the dto that contains the data to be stored
     *      in the model object.
     */
    public void insertDish(DishDto inputDish) {
        System.out.println("BentoService.insertIngredient " + "start");

        /*
         * TODO: Convert DTO object into Model object.
         */
        DishModel dishModel = new DishModel();
        dishModel.setName(inputDish.getName());
        dishModel.setPrice(inputDish.getPrice());
        dishModel.setType(inputDish.getType());

        try {            
            /*
             * TODO: Call getDish() of DishDao to check if the dish name is already existing.
             * If it is already existing, log the appropriate message in the console.
             * If it is not yet existing, call insertDish() of DishDao to insert the data into the datatore.
             */
            if(dishDao.getDish(dishModel) == null){
                    dishDao.insertDish(dishModel);
            }else{
                System.out.println("DISH ALREADY EXISTS!!!");
            }
        } catch (Exception e) {
            System.out.println("Exception in inserting dish: " + e.toString());
        }
        
        System.out.println("BentoService.insertIngredient " + "end");
    }

}
