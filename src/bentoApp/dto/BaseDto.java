/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
package bentoApp.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * The DTO class that will be inherited by other DTO classes.
 * @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [02/19/2016] 0.01 – Lehmar Cabrillos  – Initial codes.
 */
public class BaseDto {

    /**
     * List of errors.
     */
    private List<String> errorList = new ArrayList<String>();

    /**
     * Add error to the existing error list.
     * @param error error to add.
     */
    public void addError(String error) {
        this.getErrorList().add(error);
    }

    /**
     * Clears the error list.
     */
    public void clearErrors() {
        this.getErrorList().clear();
    }

    /**
     * Retrieves list of errors.
     * @return the errorList
     */
    public List<String> getErrorList() {
        return errorList;
    }

    /**
     * Sets list of errors.
     * @return the errorList to set
     */
    public void setErrorList(List<String> errorList) {
        this.errorList = errorList;
    }

}
