package stuff.converter;

import java.util.ArrayList;
import java.util.List;

public interface Converter<T, K> {
    K convert(T value);

    default List<K> convertAll(Iterable<T> objectList){
        List<K> convertedObjectList = new ArrayList<>();
        objectList.forEach(object -> convertedObjectList.add(convert(object)));
        return convertedObjectList;
    }
}
