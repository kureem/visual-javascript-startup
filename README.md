# visual-javascript-startup

## Description
This project is a sample project to help you start using the visual javascript library to build html applications.

## How to install the project
You must first aquire the visual javascript engine project. To do so, you need to clone and install the engine library. 

```bash
> git clone https://github.com/kureem/visual-javascript-engine.git

> mvn clean install
```

Please visit https://github.com/kureem/visual-javascript-engine for more information.

```bash
> git clone https://github.com/kureem/visual-javascript-startup.git

> mvn clean install

```

To generate the javascript file

```bash
mvn generate-sources

```

Run the command below for hot transpilation as convenience. This will watch for changes in source code and transpile it automatically.

```bash
mvn jsweet:watch

```

By default, this is the generated file  src/main/resources/META-INF/resources/webjars/${project.artifactId}/${project.version}/bundle.js.
For the current project it would be src/main/resources/META-INF/resources/startup/1.0.0-SNAPSHOT/bundle.js

Open the html file src/main/resources/META-INF/resources/startup.html to execute the compiled javascript.
We have included the visual javascript engine javascript file in the folder src/main/resources/META-INF/resources/webjars/ and it is referenced in the html file.


## Start writing your first codes

First create a class with main method.
All java classes having main method will be called automatically when the project is compiled. 
In the main method you will instantiate the root application and render it.

```java
package com.mycompany.ui;

import framework.components.JSContainer;

public class Boot {

	public static void main(String[] args) {
	
		//root application which is a div tag
		JSContainer rootApp = new JSContainer("div");
		
		//add Example_0
		rootApp.addChild(new Example_0());
		
		//add Example_1
		rootApp.addChild(new Example_1());
		 
		
		//render the application. of no parameter is passed, 
    //it will automatically render in the body tag of the html page
		rootApp.render();
	
	}

}

```


Snippet below is simple ui with a H1 tag and a button. An event listener is added to the button that changes the inner html of the H1 tag

```java

package com.mycompany.ui;

import framework.components.Button;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

/**
 * 
 * Simple class that extends JSContainer with tag div
 *
 */
public class Example_0 extends JSContainer {

	public Example_0() {
		super("div");

 
		// instantiate a container with tag h1
		JSContainer h1 = new JSContainer("h1");

		// sets the inner html to Hello World!
		h1.setHtml("Hello World!");

		// add the h1 tag to this container
		addChild(h1);

		// instantiate a button with text Click me
		Button btn = new Button("button", "Click Me");

		// add an onclick event listener
		btn.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				// when the button is clicked, change the inner html of the h1 to something else
				h1.setHtml("Goobye cruel world!");

			}
		}, "click");

		// add the button to this container
		addChild(btn);

	}

}


```
