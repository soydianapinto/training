import java.util.ArrayList;
import java.util.Collections;

public class IntegerContainer implements IntegerContainerInterface {

    private ArrayList<Integer> container;

    public IntegerContainer() {
        this.container = new ArrayList<>();
    }

    @Override
    public int add(int value) {
        this.container.add(value);
        return this.container.size();
    }

    @Override
    public boolean delete(int value) {
        return this.container.remove(Integer.valueOf(value));
    }

    @Override
    public Integer getMedian() {
        if (this.container.isEmpty()) {
            return null;
        }

        ArrayList<Integer> copy = new ArrayList<>(this.container);

        Collections.sort(copy);

        int middleIndex = (copy.size() - 1) / 2;

        return copy.get(middleIndex);
    }
    
}