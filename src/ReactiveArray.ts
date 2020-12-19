/*
 * ██╗░░░░░██╗███╗░░██╗░██████╗░░░░██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗
 * ██║░░░░░██║████╗░██║██╔════╝░░░░██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝
 * ██║░░░░░██║██╔██╗██║██║░░██╗░░░░██████╦╝██║░░░░░███████║██║░░╚═╝█████═╝░
 * ██║░░░░░██║██║╚████║██║░░╚██╗░░░██╔══██╗██║░░░░░██╔══██║██║░░██╗██╔═██╗░
 * ███████╗██║██║░╚███║╚██████╔╝░░░██████╦╝███████╗██║░░██║╚█████╔╝██║░╚██╗
 * ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝
 *
 * Developed by Yakov V. Ling (C) Ling • Black 2020
 * @site http://ling.black
 */


import {ReactiveCore} from "./ReactiveCore";

/**
 * Reactive array with basic functions
 *
 * To use sort/filter/map, etc, use `ReactiveArray.set` method.
 *
 */
export default class ReactiveArray<T> extends ReactiveCore<T[]> {

    /**
     * Returns the frozen array
     */
    public get value(): Readonly<T[]> {
        return Object.freeze(this.__value);
    }

    constructor(...initialValues: T[]) {
        super(initialValues);
    }

    /**
     * Pushes the element
     * @param values
     */
    public push(...values: T[]) {
        this.__value.push(...values);
        this.shake();
    }

    /**
     * Sets the array
     * @param array
     */
    public set(array: T[]) {
        this.__value = array;
        this.shake();
    }

    /**
     * Clears the array
     */
    public clear(){
        this.set([]);
    }

    /**
     * Removes item at index
     * @param index
     */
    public removeAt(index: number){
        const was = this.value.length;
        this.__value.splice(index, 1);
        if(was !== this.value.length)  this.shake();
    }

    /**
     * Removes item
     * @param item
     */
    public remove(item: T){
        let index = this.__value.indexOf(item);
        this.removeAt(index);
    }
}

/**
 * Creates the reactive array
 * @param initialValue
 */
export function reactiveArray<T>(...initialValue: T[]): ReactiveArray<T>{
    return new ReactiveArray<T>(...initialValue);
}