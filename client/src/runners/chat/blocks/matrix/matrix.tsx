import * as React from "react";
import { each, findFirst, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Matrix } from "tripetto-block-matrix/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { MatrixFabric } from "tripetto-runner-fabric/components/matrix";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { MatrixAnswer } from "../../ui/message/matrix";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-matrix",
})
export class MatrixBlock extends Matrix implements IChatRendering {
    private get isAnswered(): boolean {
        return findFirst(this.props.rows, (row) => {
            const value = this.valueOf<string>(row.id);

            return value && value.hasValue && value.string ? true : false;
        })
            ? true
            : false;
    }

    answer(props: IChatRenderProps): React.ReactNode {
        const rows: JSX.Element[] = [];

        each(this.rows<JSX.Element>(props), (row) => {
            const value = this.valueOf<string>(row.id);

            if (value && value.hasValue && value.string) {
                rows.push(
                    <MatrixAnswer key={row.id} color={props.styles.answers.textColor}>
                        {row.label}: {value.string}
                    </MatrixAnswer>
                );
            }
        });

        return (rows.length > 0 && rows) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <MatrixFabric
                    styles={props.styles.matrix}
                    columns={this.columns(props)}
                    rows={this.rows(props)}
                    ariaDescribedBy={props.ariaDescribedBy}
                    allowUnselect={true}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                />
                {props.ariaDescription}
                <ButtonFabric
                    styles={props.styles.buttons}
                    icon={SubmitIcon}
                    label={props.submitLabel}
                    disabled={!this.isAnswered}
                    onClick={done}
                />
            </>
        );
    }
}
