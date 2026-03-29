export default function CheckBroker() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Check Broker
        </h1>
        <p className="text-gray-600 mb-6">
          This is a direct navigation page to FINRA BrokerCheck for the broker.
        </p>
        <div className="w-full h-[70vh] border border-gray-200 rounded-xl overflow-hidden">
          <iframe
            src="https://brokercheck.finra.org/individual/summary/5166189"
            className="w-full h-full"
            title="FINRA BrokerCheck"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
