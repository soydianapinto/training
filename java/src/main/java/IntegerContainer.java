import java.util.ArrayList;
import java.util.Collections;

public class IntegerContainer implements IntegerContainerInterface {

    private ArrayList<Integer> container;

    // Constructor, output
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
        // If its empty return null
        if (this.container.isEmpty()) {
            return null;
        }

        // copy of new output
        ArrayList<Integer> copy = new ArrayList<>(this.container);

        // iterate (sorting)
        Collections.sort(copy);

        // get middle
        int middleIndex = (copy.size() - 1) / 2;

        // return
        return copy.get(middleIndex);
    }

    public static void main(String[] args) {
        IntegerContainer integerContainer = new IntegerContainer();
        System.out.println();
        System.out.println(integerContainer.add(2));
        System.out.println(integerContainer.add(3)); // removed
        System.out.println(integerContainer.add(10));
        System.out.println(integerContainer.add(15));
        System.out.println(integerContainer.add(30));
        System.out.println(integerContainer.add(40));
        System.out.println();
        System.out.println(integerContainer.delete(3));
        System.out.println();
        System.out.println(integerContainer.getMedian());
    }
    
}