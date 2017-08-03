/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.dao;

import org.slim3.datastore.Datastore;

import bentoApp.meta.DishModelMeta;
import bentoApp.model.DishModel;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Transaction;
import com.google.appengine.api.datastore.Query.FilterOperator;
/*
 * Contains the functions that will be used to access the datastore.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 �ELehmar Cabrillos  �EInitial codes.
 */
public class DishDao {
 
    /**
     * Used to get only one 'dish' from the datastore with the same 'name'.
     * @param inputDish - contains the 'name' to be queried
     * @return DishModel returned by the query
     */ 
    public DishModel getDish(DishModel inputDish) {
        System.out.println("DishDao.getDish " + "start");
        
        /*
         * TODO:
         * Query from 'DishModel' (kind of entity) with the inputted 'name' as filter.
         * Query only 1 entity.
         * Meta, NOT model, should be used for the query.
         */
        System.out.println("DishDao.getDish " + "end");
        
        if(Datastore.query("DishModel")
                .filter("name", FilterOperator.EQUAL, inputDish.getName())
                .asSingleEntity() == null){
            return null;
        }else{
            return inputDish;
        }
    }
    
    /**
     * Used to insert the 'dish' to the datastore
     * @param inputDish - the item to be inserted 
     */
    public void insertDish(DishModel inputDish) {
        System.out.println("DishDao.insertDish " + "start");
        Transaction transaction = Datastore.beginTransaction();
        // creating key and ID for the new entity
        Key parentKey = KeyFactory.createKey("Dish", inputDish.getName());
        Key key = Datastore.allocateId(parentKey, "DishModel");
        
        // setting the 'key' and 'id' of the model
        inputDish.setKey(key);
        inputDish.setId(key.getId());
        
        // inserting the item to the datastore

        Datastore.put(inputDish);
        transaction.commit();
        System.out.println("DishDao.insertDish " + "end");
    }

}
