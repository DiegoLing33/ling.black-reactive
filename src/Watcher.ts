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

/**
 * Watcher functions
 */
export interface WatchFunction<T>{
    (value:T): void;
}

export default class Watcher<T>{
    /**
     * Watchers
     * @protected
     */
    protected __watchers: Array<WatchFunction<T>> = [];

    /**
     * Watches the changes in reactive value
     * @param watcher
     */
    public watch(watcher: WatchFunction<T>){
        this.__watchers.push(watcher);
    }

    /**
     * Removes the watcher
     * @param watcher
     */
    public removeWatcher(watcher: WatchFunction<T>){
        this.__watchers.splice(this.__watchers.indexOf(watcher), 1);
    }

    /**
     * Removes all __watchers
     */
    public removeAllWatchers(){
        this.__watchers = [];
    }
}
