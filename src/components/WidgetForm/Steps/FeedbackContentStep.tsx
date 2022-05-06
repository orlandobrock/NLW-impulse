import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({
  feedbackType,
}: FeedbackContentStepProps) {
  const feedbackTypesInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header>
        <span className="text-xl leading-4">{feedbackTypesInfo.title}</span>
        <CloseButton />
      </header>

      <div className="flex py-8 bottom-8 gap-2 w-full"></div>
    </>
  );
}
