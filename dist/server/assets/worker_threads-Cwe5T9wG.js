import { n as __esmMin, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { n as init_utils, r as notImplemented } from "./utils-DVmy6mbA.js";
import { EventEmitter } from "node:events";
import { Readable } from "node:stream";
//#region node_modules/unenv/dist/runtime/node/internal/worker_threads/broadcast-channel.mjs
var BroadcastChannel;
var init_broadcast_channel = __esmMin(() => {
	BroadcastChannel = class {
		name = "";
		onmessage = (message) => {};
		onmessageerror = (message) => {};
		close() {}
		postMessage(message) {}
		ref() {
			return this;
		}
		unref() {
			return this;
		}
	};
});
//#endregion
//#region node_modules/unenv/dist/runtime/node/internal/worker_threads/message-port.mjs
var MessagePort;
var init_message_port = __esmMin(() => {
	MessagePort = class extends EventEmitter {
		close() {}
		postMessage(value, transferList) {}
		ref() {}
		unref() {}
		start() {}
		addEventListener(type, listener) {
			this.on(type, listener);
		}
		removeEventListener(type, listener) {
			this.off(type, listener);
		}
		dispatchEvent(event) {
			return this.emit(event.type, event);
		}
	};
});
//#endregion
//#region node_modules/unenv/dist/runtime/node/internal/worker_threads/message-channel.mjs
var MessageChannel;
var init_message_channel = __esmMin(() => {
	init_message_port();
	MessageChannel = class {
		port1 = new MessagePort();
		port2 = new MessagePort();
	};
});
//#endregion
//#region node_modules/unenv/dist/runtime/node/internal/worker_threads/worker.mjs
var Worker;
var init_worker = __esmMin(() => {
	Worker = class extends EventEmitter {
		stdin = null;
		stdout = new Readable();
		stderr = new Readable();
		threadId = 0;
		performance = { eventLoopUtilization: () => ({
			idle: 0,
			active: 0,
			utilization: 0
		}) };
		postMessage(_value, _transferList) {}
		postMessageToThread(_threadId, _value, _transferList, _timeout) {
			return Promise.resolve();
		}
		ref() {}
		unref() {}
		terminate() {
			return Promise.resolve(0);
		}
		getHeapSnapshot() {
			return Promise.resolve(new Readable());
		}
	};
});
//#endregion
//#region node_modules/unenv/dist/runtime/node/worker_threads.mjs
var worker_threads_exports = /* @__PURE__ */ __exportAll({
	BroadcastChannel: () => BroadcastChannel,
	MessageChannel: () => MessageChannel,
	MessagePort: () => MessagePort,
	SHARE_ENV: () => SHARE_ENV,
	Worker: () => Worker,
	default: () => worker_threads_default,
	getEnvironmentData: () => getEnvironmentData,
	isInternalThread: () => false,
	isMainThread: () => true,
	isMarkedAsUntransferable: () => isMarkedAsUntransferable,
	markAsUncloneable: () => markAsUncloneable,
	markAsUntransferable: () => markAsUntransferable,
	moveMessagePortToContext: () => moveMessagePortToContext,
	parentPort: () => null,
	postMessageToThread: () => postMessageToThread,
	receiveMessageOnPort: () => receiveMessageOnPort,
	resourceLimits: () => resourceLimits,
	setEnvironmentData: () => setEnvironmentData,
	threadId: () => 0,
	workerData: () => null
}), _environmentData, getEnvironmentData, setEnvironmentData, isMarkedAsUntransferable, markAsUntransferable, markAsUncloneable, moveMessagePortToContext, receiveMessageOnPort, SHARE_ENV, resourceLimits, postMessageToThread, worker_threads_default;
var init_worker_threads = __esmMin(() => {
	init_broadcast_channel();
	init_message_channel();
	init_message_port();
	init_worker();
	init_utils();
	_environmentData = /* @__PURE__ */ new Map();
	getEnvironmentData = function getEnvironmentData(key) {
		return _environmentData.get(key);
	};
	setEnvironmentData = function setEnvironmentData(key, value) {
		_environmentData.set(key, value);
	};
	isMarkedAsUntransferable = () => false;
	markAsUntransferable = function markAsUntransferable(value) {};
	markAsUncloneable = () => {};
	moveMessagePortToContext = () => new MessagePort();
	receiveMessageOnPort = () => void 0;
	SHARE_ENV = /* @__PURE__ */ Symbol.for("nodejs.worker_threads.SHARE_ENV");
	resourceLimits = {};
	postMessageToThread = /* @__PURE__ */ notImplemented("worker_threads.postMessageToThread");
	worker_threads_default = {
		BroadcastChannel,
		MessageChannel,
		MessagePort,
		Worker,
		SHARE_ENV,
		getEnvironmentData,
		isMainThread: true,
		isMarkedAsUntransferable,
		markAsUntransferable,
		markAsUncloneable,
		moveMessagePortToContext,
		parentPort: null,
		receiveMessageOnPort,
		resourceLimits,
		setEnvironmentData,
		postMessageToThread,
		threadId: 0,
		workerData: null,
		isInternalThread: false
	};
});
//#endregion
export { init_message_channel as _, markAsUncloneable as a, BroadcastChannel as b, postMessageToThread as c, setEnvironmentData as d, worker_threads_default as f, MessageChannel as g, init_worker as h, isMarkedAsUntransferable as i, receiveMessageOnPort as l, Worker as m, getEnvironmentData as n, markAsUntransferable as o, worker_threads_exports as p, init_worker_threads as r, moveMessagePortToContext as s, SHARE_ENV as t, resourceLimits as u, MessagePort as v, init_broadcast_channel as x, init_message_port as y };
