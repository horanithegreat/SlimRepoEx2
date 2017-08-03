package bentoApp.meta;

//@javax.annotation.Generated(value = { "slim3-gen", "@VERSION@" }, date = "2017-08-03 08:53:48")
/** */
public final class DishModelMeta extends org.slim3.datastore.ModelMeta<bentoApp.model.DishModel> {

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Long> id = new org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Long>(this, "id", "id", java.lang.Long.class);

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, com.google.appengine.api.datastore.Key> key = new org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, com.google.appengine.api.datastore.Key>(this, "__key__", "key", com.google.appengine.api.datastore.Key.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<bentoApp.model.DishModel> name = new org.slim3.datastore.StringAttributeMeta<bentoApp.model.DishModel>(this, "name", "name");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Double> price = new org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Double>(this, "price", "price", java.lang.Double.class);

    /** */
    public final org.slim3.datastore.StringAttributeMeta<bentoApp.model.DishModel> type = new org.slim3.datastore.StringAttributeMeta<bentoApp.model.DishModel>(this, "type", "type");

    /** */
    public final org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Long> version = new org.slim3.datastore.CoreAttributeMeta<bentoApp.model.DishModel, java.lang.Long>(this, "version", "version", java.lang.Long.class);

    private static final DishModelMeta slim3_singleton = new DishModelMeta();

    /**
     * @return the singleton
     */
    public static DishModelMeta get() {
       return slim3_singleton;
    }

    /** */
    public DishModelMeta() {
        super("DishModel", bentoApp.model.DishModel.class);
    }

    @Override
    public bentoApp.model.DishModel entityToModel(com.google.appengine.api.datastore.Entity entity) {
        bentoApp.model.DishModel model = new bentoApp.model.DishModel();
        model.setId((java.lang.Long) entity.getProperty("id"));
        model.setKey(entity.getKey());
        model.setName((java.lang.String) entity.getProperty("name"));
        model.setPrice((java.lang.Double) entity.getProperty("price"));
        model.setType((java.lang.String) entity.getProperty("type"));
        model.setVersion((java.lang.Long) entity.getProperty("version"));
        return model;
    }

    @Override
    public com.google.appengine.api.datastore.Entity modelToEntity(java.lang.Object model) {
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        com.google.appengine.api.datastore.Entity entity = null;
        if (m.getKey() != null) {
            entity = new com.google.appengine.api.datastore.Entity(m.getKey());
        } else {
            entity = new com.google.appengine.api.datastore.Entity(kind);
        }
        entity.setProperty("id", m.getId());
        entity.setProperty("name", m.getName());
        entity.setProperty("price", m.getPrice());
        entity.setProperty("type", m.getType());
        entity.setProperty("version", m.getVersion());
        entity.setProperty("slim3.schemaVersion", 1);
        return entity;
    }

    @Override
    protected com.google.appengine.api.datastore.Key getKey(Object model) {
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        return m.getKey();
    }

    @Override
    protected void setKey(Object model, com.google.appengine.api.datastore.Key key) {
        validateKey(key);
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        m.setKey(key);
    }

    @Override
    protected long getVersion(Object model) {
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        return m.getVersion() != null ? m.getVersion().longValue() : 0L;
    }

    @Override
    protected void assignKeyToModelRefIfNecessary(com.google.appengine.api.datastore.AsyncDatastoreService ds, java.lang.Object model) {
    }

    @Override
    protected void incrementVersion(Object model) {
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        long version = m.getVersion() != null ? m.getVersion().longValue() : 0L;
        m.setVersion(Long.valueOf(version + 1L));
    }

    @Override
    protected void prePut(Object model) {
    }

    @Override
    protected void postGet(Object model) {
    }

    @Override
    public String getSchemaVersionName() {
        return "slim3.schemaVersion";
    }

    @Override
    public String getClassHierarchyListName() {
        return "slim3.classHierarchyList";
    }

    @Override
    protected boolean isCipherProperty(String propertyName) {
        return false;
    }

    @Override
    protected void modelToJson(org.slim3.datastore.json.JsonWriter writer, java.lang.Object model, int maxDepth, int currentDepth) {
        bentoApp.model.DishModel m = (bentoApp.model.DishModel) model;
        writer.beginObject();
        org.slim3.datastore.json.Default encoder0 = new org.slim3.datastore.json.Default();
        if(m.getId() != null){
            writer.setNextPropertyName("id");
            encoder0.encode(writer, m.getId());
        }
        if(m.getKey() != null){
            writer.setNextPropertyName("key");
            encoder0.encode(writer, m.getKey());
        }
        if(m.getName() != null){
            writer.setNextPropertyName("name");
            encoder0.encode(writer, m.getName());
        }
        if(m.getPrice() != null){
            writer.setNextPropertyName("price");
            encoder0.encode(writer, m.getPrice());
        }
        if(m.getType() != null){
            writer.setNextPropertyName("type");
            encoder0.encode(writer, m.getType());
        }
        if(m.getVersion() != null){
            writer.setNextPropertyName("version");
            encoder0.encode(writer, m.getVersion());
        }
        writer.endObject();
    }

    @Override
    protected bentoApp.model.DishModel jsonToModel(org.slim3.datastore.json.JsonRootReader rootReader, int maxDepth, int currentDepth) {
        bentoApp.model.DishModel m = new bentoApp.model.DishModel();
        org.slim3.datastore.json.JsonReader reader = null;
        org.slim3.datastore.json.Default decoder0 = new org.slim3.datastore.json.Default();
        reader = rootReader.newObjectReader("id");
        m.setId(decoder0.decode(reader, m.getId()));
        reader = rootReader.newObjectReader("key");
        m.setKey(decoder0.decode(reader, m.getKey()));
        reader = rootReader.newObjectReader("name");
        m.setName(decoder0.decode(reader, m.getName()));
        reader = rootReader.newObjectReader("price");
        m.setPrice(decoder0.decode(reader, m.getPrice()));
        reader = rootReader.newObjectReader("type");
        m.setType(decoder0.decode(reader, m.getType()));
        reader = rootReader.newObjectReader("version");
        m.setVersion(decoder0.decode(reader, m.getVersion()));
        return m;
    }
}