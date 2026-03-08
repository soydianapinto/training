import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Level2Tests {

    private IntegerContainerInterface container;

    @BeforeEach
    public void setUp() {
        container = new IntegerContainer();
    }

    @Test
    public void testLevel2Case01SimpleMedianOddLength() {
        assertEquals(1, container.add(1));
        assertEquals(2, container.add(2));
        assertEquals(3, container.add(5));
        assertEquals(4, container.add(7));
        assertEquals(5, container.add(9));
        assertEquals(Integer.valueOf(5), container.getMedian());
        assertEquals(6, container.add(11));
        assertEquals(7, container.add(15));
        assertEquals(Integer.valueOf(7), container.getMedian());
    }

    @Test
    public void testLevel2Case02SimpleMedianEvenLength() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(20));
        assertEquals(Integer.valueOf(10), container.getMedian());
        assertEquals(3, container.add(30));
        assertEquals(4, container.add(40));
        assertEquals(Integer.valueOf(20), container.getMedian());
        assertEquals(Integer.valueOf(20), container.getMedian());
        assertEquals(5, container.add(50));
        assertEquals(6, container.add(60));
        assertEquals(7, container.add(70));
        assertEquals(8, container.add(80));
        assertEquals(Integer.valueOf(40), container.getMedian());
    }

    @Test
    public void testLevel2Case03MedianOfEmptyContainer() {
        assertNull(container.getMedian());
        assertEquals(1, container.add(1));
        assertEquals(Integer.valueOf(1), container.getMedian());
    }

    @Test
    public void testLevel2Case04MedianOfNonSortedContainer() {
        assertEquals(1, container.add(3));
        assertEquals(2, container.add(2));
        assertEquals(3, container.add(5));
        assertEquals(4, container.add(4));
        assertEquals(5, container.add(1));
        assertEquals(Integer.valueOf(3), container.getMedian());
        assertEquals(6, container.add(8));
        assertEquals(7, container.add(6));
        assertEquals(8, container.add(7));
        assertEquals(Integer.valueOf(4), container.getMedian());
    }

    @Test
    public void testLevel2Case06MedianWithDeletions() {
        assertEquals(1, container.add(30));
        assertEquals(2, container.add(20));
        assertEquals(3, container.add(10));
        assertEquals(Integer.valueOf(20), container.getMedian());
        assertTrue(container.delete(30));
        assertEquals(Integer.valueOf(10), container.getMedian());
        assertTrue(container.delete(10));
        assertEquals(Integer.valueOf(20), container.getMedian());
        assertTrue(container.delete(20));
        assertNull(container.getMedian());
    }

    @Test
    public void testLevel2Case08MedianOfContainerWithNegativeIntegers() {
        assertEquals(1, container.add(-20));
        assertEquals(2, container.add(-10));
        assertEquals(3, container.add(10));
        assertEquals(4, container.add(20));
        assertEquals(5, container.add(0));
        assertEquals(Integer.valueOf(0), container.getMedian());
        assertEquals(6, container.add(-30));
        assertEquals(Integer.valueOf(-10), container.getMedian());
        assertEquals(7, container.add(30));
        assertEquals(Integer.valueOf(0), container.getMedian());
        assertEquals(8, container.add(40));
        assertEquals(9, container.add(50));
        assertEquals(Integer.valueOf(10), container.getMedian());
    }
}