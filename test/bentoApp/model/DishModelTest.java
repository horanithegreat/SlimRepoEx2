package bentoApp.model;

import org.slim3.tester.AppEngineTestCase;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class DishModelTest extends AppEngineTestCase {

    private DishModel model = new DishModel();

    @Test
    public void test() throws Exception {
        assertThat(model, is(notNullValue()));
    }
}
