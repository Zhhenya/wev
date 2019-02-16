package stuff.converter;

public interface Converter<T, K> {
    K convert(T value);
}
