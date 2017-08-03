/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.dto;

/**
 * Contains the properties and methods for the 'dish' model.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 – Lehmar Cabrillos  – Initial codes.
 */
public class DishDto extends BaseDto{
    /**
     * The id of the 'dish'.
     */
    private Long id;
    
    /**
     * The name of the 'dish'.
     */
    private String name;
    
    /**
     * The type of the 'dish'.
     */
    private String type;
    
    /**
     * The cost of the 'dish'.
     */
    private Double price;
    
    /**
     * Retrieves the id of the 'dish'.
     * @return the id of the 'dish'.
     */
    public Long getId() {
        return id;
    }
    
    /**
     * Sets the id of the 'dish'
     * @param id - the value to be set
     */
    public void setId(Long id) {
        this.id = id;
    }
    
    /**
     * Retrives the name of the 'dish'.
     * @return the name of the 'dish'.
     */
    public String getName() {
        return name;
    }
    
    /**
     * Sets the name of the 'dish'.
     * @param name - the value to be set
     */
    public void setName(String name) {
        this.name = name;
    }
    
    /**
     * Retrieves the type of the 'dish'
     * @return the type of the 'dish'
     */
    public String getType() {
        return type;
    }
    
    /**
     * Sets the type of the 'dish'
     * @param type - the value to be set
     */
    public void setType(String type) {
        this.type = type;
    }
    
    /**
     * Retrieves the cost of the 'dish'.
     * @return the cost of the 'dish'.
     */
    public Double getPrice() {
        return price;
    }
    
    /**
     * Sets the price of the 'dish'.
     * @param cost - the value to be set.
     */
    public void setPrice(Double price) {
        this.price = price;
    } 
}
