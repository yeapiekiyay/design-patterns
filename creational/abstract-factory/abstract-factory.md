# Abstract Factory

## Intent

> Provide an interface for creating families of related or dependent objects without specifying their concrete classes. - GoF

## Motivation

The abstract factory allows a client to create objects of different families without being tightly coupled with the concrete objects.

## Consequences

* Concrete classes are isolated. Clients use concrete classes through their abstract interfaces.
* Exchanging product families is easy. Simply change out the concrete factory to produce another family of products.
* Consistency among products is promoted. Because a factory is responsible for creating a family of objects, it's easy to enforce that only a single family of objects are created.
* Supporting new kinds of products is difficult. In order to add new kinds of products, you must change the abstract factory and all of its subclasses.