import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Level1Tests {

    private IntegerContainerInterface container;

    @BeforeEach
    public void setUp() {
        container = new IntegerContainer(); 
    }

    @Test
    public void testLevel1Case01AddTwoNumbers() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(100));
    }

    @Test
    public void testLevel1Case02AddManyNumbers() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(9));
        assertEquals(3, container.add(8));
        assertEquals(4, container.add(7));
        assertEquals(5, container.add(6));
        assertEquals(6, container.add(5));
        assertEquals(7, container.add(4));
        assertEquals(8, container.add(3));
        assertEquals(9, container.add(2));
        assertEquals(10, container.add(1));
    }

    @Test
    public void testLevel1Case03DeleteNumber() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(100));
        assertTrue(container.delete(10));
    }

    @Test
    public void testLevel1Case04DeleteNonexistingNumber() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(100));
        assertFalse(container.delete(20));
        assertTrue(container.delete(10));
        assertFalse(container.delete(10));
    }

    @Test
    public void testLevel1Case05AddAndDeleteSameNumbers() {
        assertEquals(1, container.add(10));
        assertEquals(2, container.add(10));
        assertEquals(3, container.add(10));
        assertEquals(4, container.add(10));
        assertEquals(5, container.add(10));
        assertTrue(container.delete(10));
        assertTrue(container.delete(10));
        assertTrue(container.delete(10));
        assertTrue(container.delete(10));
        assertTrue(container.delete(10));
        assertFalse(container.delete(10));
        assertFalse(container.delete(10));
    }

    @Test
    public void testLevel1Case06AddDeleteSeveralTimes() {
        assertEquals(1, container.add(555));
        assertTrue(container.delete(555));
        assertFalse(container.delete(555));
        assertEquals(1, container.add(555));
        assertTrue(container.delete(555));
        assertFalse(container.delete(555));
    }

    @Test
    public void testLevel1Case08DeleteBeforeAdd() {
        assertFalse(container.delete(1));
        assertFalse(container.delete(2));
        assertFalse(container.delete(3));
        assertEquals(1, container.add(1));
        assertEquals(2, container.add(2));
        assertEquals(3, container.add(3));
        assertTrue(container.delete(3));
        assertTrue(container.delete(2));
        assertTrue(container.delete(1));
        assertFalse(container.delete(3));
        assertFalse(container.delete(2));
        assertFalse(container.delete(1));
    }
}