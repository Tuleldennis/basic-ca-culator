// Global variables
let editor;
let pyodide;
let currentLanguage = 'html';

// Language configurations
const languageConfigs = {
    html: {
        mode: 'htmlmixed',
        template: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        button {
            background: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website!</h1>
        <p>This is a sample HTML page with CSS and JavaScript.</p>
        <button onclick="showMessage()">Click Me!</button>
        <div id="message"></div>
    </div>
    
    <script>
        function showMessage() {
            const messageDiv = document.getElementById('message');
            messageDiv.innerHTML = '<p style="margin-top: 20px; color: #ffd700;">Hello from JavaScript!</p>';
        }
    </script>
</body>
</html>`
    },
    python: {
        mode: 'python',
        template: `# Python Code Example
import math
import random

def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

def calculate_circle_area(radius):
    """Calculate the area of a circle"""
    return math.pi * radius ** 2

# Main execution
print("🐍 Python Code Preview Demo")
print("=" * 30)

# Fibonacci sequence
n = 10
fib_sequence = fibonacci(n)
print(f"Fibonacci sequence (first {n} terms): {fib_sequence}")

# Circle area calculation
radius = 5
area = calculate_circle_area(radius)
print(f"Area of circle with radius {radius}: {area:.2f}")

# Random number generation
random_numbers = [random.randint(1, 100) for _ in range(5)]
print(f"Random numbers: {random_numbers}")

# List comprehension example
squares = [x**2 for x in range(1, 6)]
print(f"Squares of 1-5: {squares}")

print("\\n✅ Python execution completed!")`
    },
    javascript: {
        mode: 'javascript',
        template: `// JavaScript Code Example
console.log("🚀 JavaScript Code Preview Demo");
console.log("=".repeat(35));

// Function declarations
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

const calculateCircleArea = (radius) => {
    return Math.PI * radius ** 2;
};

// Array methods demonstration
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

// Main execution
console.log("Fibonacci sequence (first 10 terms):", fibonacci(10));
console.log("Circle area (radius 5):", calculateCircleArea(5).toFixed(2));
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
console.log("Even numbers:", evens);
console.log("Sum of numbers:", sum);

// Modern JavaScript features
const person = {
    name: "Alice",
    age: 30,
    greet() {
        return \`Hello, I'm \${this.name} and I'm \${this.age} years old!\`;
    }
};

console.log(person.greet());

// Promise example
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function asyncDemo() {
    console.log("Starting async operation...");
    await delay(1000);
    console.log("✅ Async operation completed!");
}

asyncDemo();`
    },
    react: {
        mode: 'jsx',
        template: `// React Component Example
const { useState, useEffect } = React;

// Counter Component
function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#007bff');
    
    useEffect(() => {
        // Change color based on count
        if (count > 10) setColor('#dc3545');
        else if (count > 5) setColor('#ffc107');
        else setColor('#007bff');
    }, [count]);
    
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ color: color }}>Counter: {count}</h2>
            <div style={{ marginBottom: '20px' }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{ 
                        margin: '0 10px', 
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{ 
                        margin: '0 10px', 
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </button>
                <button 
                    onClick={() => setCount(0)}
                    style={{ 
                        margin: '0 10px', 
                        padding: '10px 20px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

// Todo List Component
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build awesome apps', completed: false }
    ]);
    const [newTodo, setNewTodo] = useState('');
    
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo,
                completed: false
            }]);
            setNewTodo('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px' }}>
            <h3>Todo List</h3>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add new todo..."
                    style={{
                        padding: '10px',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        width: '200px'
                    }}
                />
                <button 
                    onClick={addTodo}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Add
                </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        style={{
                            padding: '10px',
                            margin: '5px 0',
                            backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
                            border: '1px solid #dee2e6',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                padding: '30px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h1 style={{ textAlign: 'center', color: '#333' }}>
                    ⚛️ React Demo App
                </h1>
                <Counter />
                <TodoList />
            </div>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));`
    },
    java: {
        mode: 'text/x-java',
        template: `// Java Code Example
import java.util.*;
import java.util.stream.Collectors;

public class JavaDemo {
    public static void main(String[] args) {
        System.out.println("☕ Java Code Preview Demo");
        System.out.println("=".repeat(30));
        
        // Object-oriented programming
        Person person = new Person("Alice", 30);
        System.out.println(person.introduce());
        
        // Collections and Streams
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        List<Integer> evenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        
        System.out.println("Original numbers: " + numbers);
        System.out.println("Even squares: " + evenSquares);
        
        // Fibonacci calculation
        System.out.println("Fibonacci sequence (first 10): " + fibonacci(10));
        
        // Exception handling
        try {
            int result = divide(10, 2);
            System.out.println("Division result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println("\\n✅ Java execution completed!");
    }
    
    public static List<Integer> fibonacci(int n) {
        List<Integer> fib = new ArrayList<>();
        if (n >= 1) fib.add(0);
        if (n >= 2) fib.add(1);
        
        for (int i = 2; i < n; i++) {
            fib.add(fib.get(i-1) + fib.get(i-2));
        }
        return fib;
    }
    
    public static int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero!");
        }
        return a / b;
    }
}

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String introduce() {
        return String.format("Hello, I'm %s and I'm %d years old!", name, age);
    }
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}`
    },
    cpp: {
        mode: 'text/x-c++src',
        template: `// C++ Code Example
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <memory>

class Person {
private:
    std::string name;
    int age;

public:
    Person(const std::string& n, int a) : name(n), age(a) {}
    
    std::string introduce() const {
        return "Hello, I'm " + name + " and I'm " + std::to_string(age) + " years old!";
    }
    
    // Getters
    const std::string& getName() const { return name; }
    int getAge() const { return age; }
};

std::vector<int> fibonacci(int n) {
    std::vector<int> fib;
    if (n >= 1) fib.push_back(0);
    if (n >= 2) fib.push_back(1);
    
    for (int i = 2; i < n; i++) {
        fib.push_back(fib[i-1] + fib[i-2]);
    }
    return fib;
}

template<typename T>
void printVector(const std::vector<T>& vec, const std::string& label) {
    std::cout << label << ": ";
    for (const auto& item : vec) {
        std::cout << item << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::cout << "🔧 C++ Code Preview Demo" << std::endl;
    std::cout << std::string(30, '=') << std::endl;
    
    // Object-oriented programming
    auto person = std::make_unique<Person>("Alice", 30);
    std::cout << person->introduce() << std::endl;
    
    // STL containers and algorithms
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    printVector(numbers, "Original numbers");
    
    // Filter even numbers and square them
    std::vector<int> evenSquares;
    std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(evenSquares),
                 [](int n) { return n % 2 == 0; });
    
    std::transform(evenSquares.begin(), evenSquares.end(), evenSquares.begin(),
                   [](int n) { return n * n; });
    
    printVector(evenSquares, "Even squares");
    
    // Fibonacci sequence
    auto fibSequence = fibonacci(10);
    printVector(fibSequence, "Fibonacci sequence (first 10)");
    
    // Lambda functions
    auto multiply = [](int a, int b) -> int {
        return a * b;
    };
    
    std::cout << "Lambda result (5 * 3): " << multiply(5, 3) << std::endl;
    
    std::cout << "\\n✅ C++ execution completed!" << std::endl;
    
    return 0;
}`
    },
    csharp: {
        mode: 'text/x-csharp',
        template: `// C# Code Example
using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpDemo
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }
        
        public string Introduce()
        {
            return $"Hello, I'm {Name} and I'm {Age} years old!";
        }
    }
    
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("🔷 C# Code Preview Demo");
            Console.WriteLine(new string('=', 30));
            
            // Object-oriented programming
            var person = new Person("Alice", 30);
            Console.WriteLine(person.Introduce());
            
            // LINQ and Collections
            var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            
            var evenSquares = numbers
                .Where(n => n % 2 == 0)
                .Select(n => n * n)
                .ToList();
            
            Console.WriteLine($"Original numbers: [{string.Join(", ", numbers)}]");
            Console.WriteLine($"Even squares: [{string.Join(", ", evenSquares)}]");
            
            // Fibonacci sequence
            var fibSequence = Fibonacci(10);
            Console.WriteLine($"Fibonacci sequence (first 10): [{string.Join(", ", fibSequence)}]");
            
            // Exception handling
            try
            {
                int result = Divide(10, 2);
                Console.WriteLine($"Division result: {result}");
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            
            // Anonymous methods and delegates
            Func<int, int, int> multiply = (a, b) => a * b;
            Console.WriteLine($"Lambda result (5 * 3): {multiply(5, 3)}");
            
            Console.WriteLine("\\n✅ C# execution completed!");
        }
        
        public static List<int> Fibonacci(int n)
        {
            var fib = new List<int>();
            if (n >= 1) fib.Add(0);
            if (n >= 2) fib.Add(1);
            
            for (int i = 2; i < n; i++)
            {
                fib.Add(fib[i-1] + fib[i-2]);
            }
            return fib;
        }
        
        public static int Divide(int a, int b)
        {
            if (b == 0)
                throw new DivideByZeroException("Division by zero!");
            return a / b;
        }
    }
}`
    },
    php: {
        mode: 'php',
        template: `<?php
// PHP Code Example
echo "🐘 PHP Code Preview Demo\\n";
echo str_repeat("=", 30) . "\\n";

// Object-oriented programming
class Person {
    private $name;
    private $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function introduce() {
        return "Hello, I'm {$this->name} and I'm {$this->age} years old!";
    }
    
    public function getName() { return $this->name; }
    public function getAge() { return $this->age; }
}

$person = new Person("Alice", 30);
echo $person->introduce() . "\\n";

// Arrays and functions
$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$evenNumbers = array_filter($numbers, function($n) {
    return $n % 2 == 0;
});
$evenSquares = array_map(function($n) {
    return $n * $n;
}, $evenNumbers);

echo "Original numbers: [" . implode(", ", $numbers) . "]\\n";
echo "Even squares: [" . implode(", ", $evenSquares) . "]\\n";

// Fibonacci function
function fibonacci($n) {
    $fib = [];
    if ($n >= 1) $fib[] = 0;
    if ($n >= 2) $fib[] = 1;
    
    for ($i = 2; $i < $n; $i++) {
        $fib[] = $fib[$i-1] + $fib[$i-2];
    }
    return $fib;
}

$fibSequence = fibonacci(10);
echo "Fibonacci sequence (first 10): [" . implode(", ", $fibSequence) . "]\\n";

// Associative arrays
$fruits = [
    "apple" => "red",
    "banana" => "yellow",
    "grape" => "purple"
];

echo "Fruits and colors:\\n";
foreach ($fruits as $fruit => $color) {
    echo "- $fruit is $color\\n";
}

// String manipulation
$text = "Hello, World!";
echo "Original text: $text\\n";
echo "Uppercase: " . strtoupper($text) . "\\n";
echo "Length: " . strlen($text) . " characters\\n";

echo "\\n✅ PHP execution completed!\\n";
?>`
    },
    ruby: {
        mode: 'ruby',
        template: `# Ruby Code Example
puts "💎 Ruby Code Preview Demo"
puts "=" * 30

# Object-oriented programming
class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def introduce
    "Hello, I'm #{@name} and I'm #{@age} years old!"
  end
end

person = Person.new("Alice", 30)
puts person.introduce

# Arrays and blocks
numbers = (1..10).to_a
even_squares = numbers.select(&:even?).map { |n| n ** 2 }

puts "Original numbers: #{numbers}"
puts "Even squares: #{even_squares}"

# Fibonacci method
def fibonacci(n)
  return [] if n <= 0
  return [0] if n == 1
  return [0, 1] if n == 2
  
  fib = [0, 1]
  (2...n).each do |i|
    fib << fib[i-1] + fib[i-2]
  end
  fib
end

fib_sequence = fibonacci(10)
puts "Fibonacci sequence (first 10): #{fib_sequence}"

# Hash (dictionary)
fruits = {
  apple: "red",
  banana: "yellow",
  grape: "purple"
}

puts "Fruits and colors:"
fruits.each do |fruit, color|
  puts "- #{fruit} is #{color}"
end

# String interpolation and methods
text = "Hello, World!"
puts "Original text: #{text}"
puts "Uppercase: #{text.upcase}"
puts "Length: #{text.length} characters"

# Blocks and iterators
puts "Numbers 1-5 with their squares:"
(1..5).each do |i|
  puts "#{i} squared is #{i ** 2}"
end

puts "\\n✅ Ruby execution completed!"`
    },
    go: {
        mode: 'go',
        template: `// Go Code Example
package main

import (
    "fmt"
    "strings"
)

// Person struct
type Person struct {
    Name string
    Age  int
}

// Method for Person
func (p Person) Introduce() string {
    return fmt.Sprintf("Hello, I'm %s and I'm %d years old!", p.Name, p.Age)
}

// Fibonacci function
func fibonacci(n int) []int {
    if n <= 0 {
        return []int{}
    }
    if n == 1 {
        return []int{0}
    }
    if n == 2 {
        return []int{0, 1}
    }
    
    fib := []int{0, 1}
    for i := 2; i < n; i++ {
        fib = append(fib, fib[i-1]+fib[i-2])
    }
    return fib
}

// Filter function for even numbers
func filterEven(numbers []int) []int {
    var result []int
    for _, num := range numbers {
        if num%2 == 0 {
            result = append(result, num*num)
        }
    }
    return result
}

func main() {
    fmt.Println("🐹 Go Code Preview Demo")
    fmt.Println(strings.Repeat("=", 30))
    
    // Struct usage
    person := Person{Name: "Alice", Age: 30}
    fmt.Println(person.Introduce())
    
    // Slice operations
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    evenSquares := filterEven(numbers)
    
    fmt.Printf("Original numbers: %v\\n", numbers)
    fmt.Printf("Even squares: %v\\n", evenSquares)
    
    // Fibonacci sequence
    fibSequence := fibonacci(10)
    fmt.Printf("Fibonacci sequence (first 10): %v\\n", fibSequence)
    
    // Map usage
    fruits := map[string]string{
        "apple":  "red",
        "banana": "yellow",
        "grape":  "purple",
    }
    
    fmt.Println("Fruits and colors:")
    for fruit, color := range fruits {
        fmt.Printf("- %s is %s\\n", fruit, color)
    }
    
    // Goroutine example (concurrent execution)
    ch := make(chan string, 3)
    
    go func() { ch <- "Hello" }()
    go func() { ch <- "from" }()
    go func() { ch <- "goroutines!" }()
    
    for i := 0; i < 3; i++ {
        fmt.Println(<-ch)
    }
    
    fmt.Println("\\n✅ Go execution completed!")
}`
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEditor();
    setupEventListeners();
    updateStatus('Ready');
});

// Initialize CodeMirror editor
function initializeEditor() {
    editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        styleActiveLine: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'F11': function(cm) {
                cm.setOption('fullScreen', !cm.getOption('fullScreen'));
            },
            'Esc': function(cm) {
                if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
            }
        }
    });
    
    // Set initial template
    editor.setValue(languageConfigs.html.template);
    
    // Update status on editor changes
    editor.on('change', function() {
        updateCharCount();
        updateLineCount();
        
        // Auto-run for HTML/CSS/JS
        if (currentLanguage === 'html') {
            debounce(runCode, 1000)();
        }
    });
    
    // Initial run
    runCode();
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    document.getElementById('language-select').addEventListener('change', function(e) {
        switchLanguage(e.target.value);
    });
    
    // Template button
    document.getElementById('template-btn').addEventListener('click', loadTemplate);
    
    // Run button
    document.getElementById('run-btn').addEventListener('click', runCode);
    
    // Clear button
    document.getElementById('clear-btn').addEventListener('click', clearEditor);
    
    // Copy button
    document.getElementById('copy-btn').addEventListener('click', copyCode);
    
    // Fullscreen button
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
    
    // Download button
    document.getElementById('download-btn').addEventListener('click', downloadCode);
    
    // Clear console button
    document.getElementById('clear-console').addEventListener('click', clearConsole);
}

// Switch programming language
function switchLanguage(language) {
    currentLanguage = language;
    const config = languageConfigs[language];
    
    if (config) {
        editor.setOption('mode', config.mode);
        updateStatus(`Switched to ${language.toUpperCase()}`);
        
        // Show/hide console based on language
        const consoleOutput = document.getElementById('console-output');
        if (language === 'python' || language === 'javascript') {
            consoleOutput.classList.remove('hidden');
        } else {
            consoleOutput.classList.add('hidden');
        }
    }
}

// Load template for current language
function loadTemplate() {
    const config = languageConfigs[currentLanguage];
    if (config && config.template) {
        editor.setValue(config.template);
        updateStatus('Template loaded');
        
        // Auto-run for HTML
        if (currentLanguage === 'html') {
            runCode();
        }
    }
}

// Run code based on current language
async function runCode() {
    const code = editor.getValue();
    if (!code.trim()) {
        updateStatus('No code to run');
        return;
    }
    
    showLoading(true);
    clearConsole();
    
    try {
        switch (currentLanguage) {
            case 'html':
                await runHTML(code);
                break;
            case 'python':
                await runPython(code);
                break;
            case 'javascript':
                await runJavaScript(code);
                break;
            case 'react':
                await runReact(code);
                break;
            default:
                await runGenericCode(code);
                break;
        }
        updateStatus('Code executed successfully');
    } catch (error) {
        console.error('Execution error:', error);
        logToConsole(`Error: ${error.message}`, 'error');
        updateStatus('Execution failed');
    }
    
    showLoading(false);
}

// Run HTML/CSS/JS code
async function runHTML(code) {
    const previewFrame = document.getElementById('preview-frame');
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    previewFrame.src = url;
    
    // Clean up the blob URL after a delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Run Python code using Pyodide
async function runPython(code) {
    if (!pyodide) {
        updateStatus('Loading Python environment...');
        pyodide = await loadPyodide();
        logToConsole('Python environment loaded', 'info');
    }
    
    // Redirect Python output to console
    pyodide.runPython(`
import sys
from io import StringIO

class ConsoleCapture:
    def __init__(self):
        self.contents = []
        
    def write(self, data):
        self.contents.append(data)
        
    def flush(self):
        pass
        
    def get_output(self):
        return ''.join(self.contents)

sys.stdout = ConsoleCapture()
sys.stderr = ConsoleCapture()
    `);
    
    try {
        pyodide.runPython(code);
        const stdout = pyodide.runPython('sys.stdout.get_output()');
        const stderr = pyodide.runPython('sys.stderr.get_output()');
        
        if (stdout) logToConsole(stdout, 'log');
        if (stderr) logToConsole(stderr, 'error');
        
        // Show a simple preview message
        const previewFrame = document.getElementById('preview-frame');
        const htmlContent = `
            <html>
                <body style="font-family: Arial, sans-serif; padding: 20px; background: #f0f0f0;">
                    <h2>🐍 Python Code Executed</h2>
                    <p>Check the console output below for results.</p>
                    <div style="background: #1e1e1e; color: #fff; padding: 15px; border-radius: 5px; font-family: monospace; white-space: pre-wrap;">${stdout || 'No output'}</div>
                </body>
            </html>
        `;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        
    } catch (error) {
        logToConsole(`Python Error: ${error.message}`, 'error');
        throw error;
    }
}

// Run JavaScript code
async function runJavaScript(code) {
    // Create a safe execution environment
    const previewFrame = document.getElementById('preview-frame');
    const htmlContent = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; }
                    .output { background: #fff; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #007bff; }
                </style>
            </head>
            <body>
                <h2>🚀 JavaScript Execution</h2>
                <div id="output"></div>
                <script>
                    // Override console methods to capture output
                    const outputDiv = document.getElementById('output');
                    const originalLog = console.log;
                    const originalError = console.error;
                    const originalWarn = console.warn;
                    
                    console.log = function(...args) {
                        const div = document.createElement('div');
                        div.className = 'output';
                        div.innerHTML = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' ');
                        outputDiv.appendChild(div);
                        originalLog.apply(console, args);
                        parent.postMessage({type: 'console', level: 'log', message: args.join(' ')}, '*');
                    };
                    
                    console.error = function(...args) {
                        const div = document.createElement('div');
                        div.className = 'output';
                        div.style.borderLeftColor = '#dc3545';
                        div.style.color = '#dc3545';
                        div.innerHTML = '❌ ' + args.join(' ');
                        outputDiv.appendChild(div);
                        originalError.apply(console, args);
                        parent.postMessage({type: 'console', level: 'error', message: args.join(' ')}, '*');
                    };
                    
                    console.warn = function(...args) {
                        const div = document.createElement('div');
                        div.className = 'output';
                        div.style.borderLeftColor = '#ffc107';
                        div.style.color = '#856404';
                        div.innerHTML = '⚠️ ' + args.join(' ');
                        outputDiv.appendChild(div);
                        originalWarn.apply(console, args);
                        parent.postMessage({type: 'console', level: 'warn', message: args.join(' ')}, '*');
                    };
                    
                    try {
                        ${code}
                    } catch (error) {
                        console.error('Execution Error:', error.message);
                    }
                </script>
            </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    previewFrame.src = url;
    
    // Listen for console messages from iframe
    window.addEventListener('message', function(event) {
        if (event.data.type === 'console') {
            logToConsole(event.data.message, event.data.level);
        }
    });
    
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Run React/JSX code
async function runReact(code) {
    try {
        // Transform JSX to regular JavaScript
        const transformed = Babel.transform(code, {
            presets: ['react']
        }).code;
        
        const previewFrame = document.getElementById('preview-frame');
        const htmlContent = `
            <html>
                <head>
                    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
                    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                    <style>
                        body { margin: 0; font-family: Arial, sans-serif; }
                        #root { min-height: 100vh; }
                    </style>
                </head>
                <body>
                    <div id="root"></div>
                    <script>
                        try {
                            ${transformed}
                        } catch (error) {
                            document.getElementById('root').innerHTML = 
                                '<div style="padding: 20px; color: red; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 5px; margin: 20px;">' +
                                '<h3>React Error:</h3><pre>' + error.message + '</pre></div>';
                            console.error('React Error:', error);
                        }
                    </script>
                </body>
            </html>
        `;
        
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        
    } catch (error) {
        logToConsole(`JSX Transform Error: ${error.message}`, 'error');
        throw error;
    }
}

// Run generic code (for languages that don't have live execution)
async function runGenericCode(code) {
    const previewFrame = document.getElementById('preview-frame');
    const language = currentLanguage.toUpperCase();
    
    const htmlContent = `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        background: #2d3748; 
                        color: white;
                        margin: 0;
                    }
                    .header {
                        background: rgba(255, 255, 255, 0.1);
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .code-container {
                        background: #1a202c;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    pre {
                        margin: 0 !important;
                        padding: 20px !important;
                        font-size: 14px !important;
                        line-height: 1.5 !important;
                    }
                    .note {
                        background: rgba(255, 193, 7, 0.1);
                        border-left: 4px solid #ffc107;
                        padding: 15px;
                        margin: 20px 0;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>📝 ${language} Code Preview</h2>
                    <p>Your ${language} code is displayed below with syntax highlighting</p>
                </div>
                
                <div class="note">
                    <strong>Note:</strong> This language doesn't support live execution in the browser. 
                    The code is displayed with syntax highlighting for review.
                </div>
                
                <div class="code-container">
                    <pre><code class="language-${currentLanguage}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                </div>
                
                <script>
                    Prism.highlightAll();
                </script>
            </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    previewFrame.src = url;
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Utility functions
function clearEditor() {
    editor.setValue('');
    updateStatus('Editor cleared');
}

function copyCode() {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        updateStatus('Code copied to clipboard');
    }).catch(() => {
        updateStatus('Failed to copy code');
    });
}

function toggleFullscreen() {
    const previewFrame = document.getElementById('preview-frame');
    if (previewFrame.requestFullscreen) {
        previewFrame.requestFullscreen();
    } else if (previewFrame.webkitRequestFullscreen) {
        previewFrame.webkitRequestFullscreen();
    } else if (previewFrame.msRequestFullscreen) {
        previewFrame.msRequestFullscreen();
    }
}

function downloadCode() {
    const code = editor.getValue();
    const language = currentLanguage;
    const extensions = {
        html: 'html',
        python: 'py',
        javascript: 'js',
        react: 'jsx',
        java: 'java',
        cpp: 'cpp',
        csharp: 'cs',
        php: 'php',
        ruby: 'rb',
        go: 'go'
    };
    
    const filename = `code.${extensions[language] || 'txt'}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
    updateStatus(`Downloaded as ${filename}`);
}

function clearConsole() {
    document.getElementById('console-content').innerHTML = '';
}

function logToConsole(message, level = 'log') {
    const consoleContent = document.getElementById('console-content');
    const div = document.createElement('div');
    div.className = `console-${level}`;
    div.textContent = message;
    consoleContent.appendChild(div);
    consoleContent.scrollTop = consoleContent.scrollHeight;
}

function updateStatus(message) {
    document.getElementById('status-text').textContent = message;
}

function updateCharCount() {
    const count = editor.getValue().length;
    document.getElementById('char-count').textContent = `${count} characters`;
}

function updateLineCount() {
    const count = editor.lineCount();
    document.getElementById('line-count').textContent = `${count} lines`;
}

function showLoading(show) {
    const overlay = document.getElementById('loading-overlay');
    if (show) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
}

// Debounce function for auto-run
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}